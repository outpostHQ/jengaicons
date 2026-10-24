#![doc = include_str!("../README.md")]
#![forbid(unsafe_code)]

#[rustfmt::skip]
pub mod fill;
#[rustfmt::skip]
pub mod mono;
#[rustfmt::skip]
pub mod regular;

/// One icon: its view box and the SVG markup inside it.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Icon {
    view: &'static str,
    body: &'static str,
}

impl Icon {
    /// The `viewBox` value: four numbers.
    pub const fn view(self) -> &'static str {
        self.view
    }

    /// The markup inside the `<svg>`: shapes only, coloured `currentColor` (a mask or a cut-out
    /// is `#fff`), with ids that no other icon uses.
    pub const fn body(self) -> &'static str {
        self.body
    }

    /// Appends the icon as an inline `<svg>`, `1em` square. With a `label` the icon is an image
    /// of that name; without one, assistive technology skips it.
    pub fn write(self, out: &mut String, label: Option<&str>) {
        out.push_str("<svg viewBox=\"");
        out.push_str(self.view);
        out.push_str("\" width=\"1em\" height=\"1em\" fill=\"none\"");
        match label {
            Some(l) => {
                out.push_str(" role=\"img\" aria-label=\"");
                escape(out, l);
                out.push('"');
            }
            None => out.push_str(" aria-hidden=\"true\""),
        }
        out.push('>');
        out.push_str(self.body);
        out.push_str("</svg>");
    }
}

fn escape(out: &mut String, s: &str) {
    let mut rest = s;
    while let Some(i) = rest.find(['&', '"', '<']) {
        out.push_str(&rest[..i]);
        out.push_str(match rest.as_bytes()[i] {
            b'&' => "&amp;",
            b'"' => "&quot;",
            _ => "&lt;",
        });
        rest = &rest[i + 1..];
    }
    out.push_str(rest);
}

#[cfg(kani)]
mod laws {
    use super::Icon;

    const ICON: Icon = Icon {
        view: "0 0 1 1",
        body: "",
    };
    const HEAD: &str = "<svg viewBox=\"0 0 1 1\" width=\"1em\" height=\"1em\" fill=\"none\"";

    /// A label stays inside its attribute: no quote or `<` in the value, each `&` an entity.
    #[kani::proof]
    #[kani::unwind(24)]
    fn a_label_stays_in_its_attribute() {
        let b: [u8; 3] = kani::any();
        let Ok(l) = core::str::from_utf8(&b) else {
            return;
        };
        let mut out = String::new();
        ICON.write(&mut out, Some(l));
        let v = out
            .strip_prefix(HEAD)
            .unwrap()
            .strip_prefix(" role=\"img\" aria-label=\"")
            .unwrap();
        let v = v.strip_suffix("\"></svg>").unwrap().as_bytes();
        for i in 0..v.len() {
            assert!(v[i] != b'"' && v[i] != b'<');
            let t = &v[i..];
            assert!(
                v[i] != b'&'
                    || t.starts_with(b"&amp;")
                    || t.starts_with(b"&quot;")
                    || t.starts_with(b"&lt;")
            );
        }
    }

    /// An icon without a label is hidden and has no name.
    #[kani::proof]
    fn no_label_is_hidden() {
        let mut out = String::new();
        ICON.write(&mut out, None);
        assert!(out == [HEAD, " aria-hidden=\"true\"></svg>"].concat());
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashSet;

    const TAGS: [&str; 8] = [
        "circle", "clipPath", "defs", "ellipse", "g", "mask", "path", "rect",
    ];
    const ATTRS: [&str; 24] = [
        "clip-path",
        "clip-rule",
        "cx",
        "cy",
        "d",
        "fill",
        "fill-rule",
        "height",
        "id",
        "mask",
        "opacity",
        "r",
        "rx",
        "ry",
        "stroke",
        "stroke-dasharray",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-width",
        "transform",
        "width",
        "x",
        "y",
    ];

    fn every() -> impl Iterator<Item = &'static (&'static str, Icon)> {
        regular::ALL.iter().chain(fill::ALL).chain(mono::ALL)
    }

    fn value(
        k: &str,
        v: &'static str,
        own: &mut HashSet<&'static str>,
        refs: &mut Vec<&'static str>,
    ) {
        assert!(ATTRS.contains(&k), "{k}");
        match k {
            "fill" | "stroke" => assert!(["none", "currentColor", "#fff"].contains(&v), "{k}={v}"),
            "id" => assert!(v.starts_with("jc-") && own.insert(v), "{v}"),
            "clip-path" | "mask" => refs.push(
                v.strip_prefix("url(#")
                    .and_then(|r| r.strip_suffix(')'))
                    .unwrap(),
            ),
            _ => assert!(!v.contains("url("), "{k}={v}"),
        }
    }

    /// Every icon is a shape tree of known tags and attributes, so `body` is safe to inline.
    #[test]
    fn every_icon_is_safe_markup() {
        let mut ids = HashSet::new();
        for (name, icon) in every() {
            let view: Vec<f64> = icon.view.split(' ').map(|n| n.parse().unwrap()).collect();
            assert!(view.len() == 4 && view[2] > 0.0 && view[3] > 0.0, "{name}");
            let (mut open, mut refs, mut own) = (Vec::new(), Vec::new(), HashSet::new());
            for tag in icon.body.split('<').skip(1) {
                let (inside, text) = tag.split_once('>').unwrap();
                assert!(text.is_empty(), "{name}: text {text}");
                if let Some(t) = inside.strip_prefix('/') {
                    assert_eq!(open.pop(), Some(t), "{name}");
                    continue;
                }
                let (t, mut attrs) = inside
                    .trim_end_matches('/')
                    .split_once(' ')
                    .unwrap_or((inside, ""));
                assert!(TAGS.contains(&t), "{name}: <{t}>");
                while let Some((k, r)) = attrs.split_once("=\"") {
                    let (v, r) = r.split_once('"').unwrap();
                    value(k.trim(), v, &mut own, &mut refs);
                    attrs = r;
                }
                assert!(
                    attrs.trim_end_matches('/').trim().is_empty(),
                    "{name}: {attrs}"
                );
                if !inside.ends_with('/') {
                    open.push(t);
                }
            }
            assert!(open.is_empty(), "{name}");
            assert!(refs.iter().all(|r| own.contains(r)), "{name}");
            assert!(own.iter().all(|i| ids.insert(*i)), "{name}");
        }
        assert_eq!(every().count(), 2805);
    }

    #[test]
    fn the_names_are_sorted_and_unique() {
        for all in [regular::ALL, fill::ALL, mono::ALL] {
            assert!(all.windows(2).all(|w| w[0].0 < w[1].0));
        }
    }

    #[test]
    fn write_names_or_hides() {
        let i = Icon {
            view: "0 0 2 2",
            body: "<path d=\"M0 0h2\"/>",
        };
        let mut s = String::new();
        i.write(&mut s, None);
        i.write(&mut s, Some("a\"<&b"));
        let head = "<svg viewBox=\"0 0 2 2\" width=\"1em\" height=\"1em\" fill=\"none\"";
        let body = "><path d=\"M0 0h2\"/></svg>";
        let named = " role=\"img\" aria-label=\"a&quot;&lt;&amp;b\"";
        assert_eq!(
            s,
            [head, " aria-hidden=\"true\"", body, head, named, body].concat()
        );
    }
}
