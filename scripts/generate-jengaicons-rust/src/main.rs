//! Writes `packages/jengaicons-rust/src/{regular,fill,mono}.rs` from `optimized/`.

use std::{fmt::Write, fs, path::Path};

/// Each style and the suffix its file names carry.
const STYLES: [(&str, &str); 3] = [("regular", ""), ("fill", "Fill"), ("mono", "Mono")];
const COLOURS: [&str; 3] = ["=\"#111827\"", "=\"#000\"", "=\"#ed6561\""];
const CLIP: &str = "</g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M";

/// One icon: its slug, constant name, view box and inner markup.
type Entry = (String, String, String, String);

fn main() {
    let root = Path::new(env!("CARGO_MANIFEST_DIR")).join("../..");
    for (style, suffix) in STYLES {
        let icons = icons(&root.join("optimized"), style, suffix)
            .unwrap_or_else(|e| panic!("{style}: {e}"));
        fs::write(
            root.join(format!("packages/jengaicons-rust/src/{style}.rs")),
            module(style, &icons),
        )
        .unwrap();
        println!("{style}: {} icons", icons.len());
    }
}

fn read(p: &Path) -> Result<String, String> {
    fs::read_to_string(p).map_err(|e| format!("{}: {e}", p.display()))
}

/// The icons of one style, sorted by slug.
fn icons(dir: &Path, style: &str, suffix: &str) -> Result<Vec<Entry>, String> {
    let mut out = Vec::new();
    for e in fs::read_dir(dir.join(style)).map_err(|e| e.to_string())? {
        let path = e.map_err(|e| e.to_string())?.path();
        let stem = path
            .file_stem()
            .and_then(|s| s.to_str())
            .ok_or("a file name is not UTF-8")?;
        let k = stem
            .strip_suffix(suffix)
            .map(constant)
            .filter(|k| k.starts_with(|c: char| c.is_ascii_uppercase()))
            .filter(|k| k.chars().all(|c| c.is_ascii_alphanumeric() || c == '_'))
            .ok_or(format!("{stem}: not a name that ends in {suffix:?}"))?;
        let slug = k.to_ascii_lowercase().replace('_', "-");
        let (view, body) = icon(&read(&path)?, &format!("jc-{slug}-{style}-"))
            .ok_or(format!("{stem}: not an icon"))?;
        out.push((slug, k, view, body));
    }
    out.sort();
    match out.windows(2).find(|w| w[0].0 == w[1].0) {
        Some(w) => Err(format!("two icons are named {}", w[0].0)),
        None => Ok(out),
    }
}

/// `ArrowLineLeft` is `ARROW_LINE_LEFT`: a word starts at a capital after a small letter or a
/// digit, or at the last capital of a run before a small letter; a final `logo` is a word.
fn constant(name: &str) -> String {
    let name = match name.strip_suffix("logo") {
        Some(n) if !n.is_empty() => format!("{n}Logo"),
        _ => name.to_string(),
    };
    let c: Vec<char> = name.chars().collect();
    let mut k = String::new();
    for (i, &ch) in c.iter().enumerate() {
        let next_small = c.get(i + 1).is_some_and(|n| n.is_ascii_lowercase());
        if i > 0 && ch.is_ascii_uppercase() && (!c[i - 1].is_ascii_uppercase() || next_small) {
            k.push('_');
        }
        k.push(ch.to_ascii_uppercase());
    }
    k
}

fn module(style: &str, icons: &[Entry]) -> String {
    let mut rs = format!(
        "//! Generated from `optimized/{style}` by `scripts/generate-jengaicons-rust`; do not edit.\n\nuse crate::Icon;\n\n"
    );
    for (_, k, view, body) in icons {
        writeln!(
            rs,
            "pub const {k}: Icon = Icon {{ view: {view:?}, body: {body:?} }};"
        )
        .unwrap();
    }
    rs.push_str(
        "\n/// Every icon of this style by name, sorted.\npub const ALL: &[(&str, Icon)] = &[\n",
    );
    for (slug, k, ..) in icons {
        writeln!(rs, "    ({slug:?}, {k}),").unwrap();
    }
    rs + "];\n"
}

/// The view box and inner markup of a source SVG: a full-box clip becomes the view box, a fixed
/// colour becomes `currentColor`, and each id gets `prefix`, so icons on one page never share one.
fn icon(svg: &str, prefix: &str) -> Option<(String, String)> {
    let (head, body) = svg
        .trim_end()
        .strip_prefix("<svg ")?
        .strip_suffix("</svg>")?
        .split_once('>')?;
    let size = |k: &str| Some(head.split_once(&format!(" {k}=\""))?.1.split_once('"')?.0);
    let (view, body) = match unclip(body) {
        Some(v) => v,
        None => (
            format!("0 0 {} {}", size("width")?, size("height")?),
            body.to_string(),
        ),
    };
    let mut body = body
        .replace("id=\"", &format!("id=\"{prefix}"))
        .replace("url(#", &format!("url(#{prefix}"));
    for c in COLOURS {
        body = body.replace(c, "=\"currentColor\"");
    }
    Some((view, body))
}

/// The clip box and the clipped markup, when the body is one group clipped to a rectangle.
fn unclip(body: &str) -> Option<(String, String)> {
    let (g, rest) = body.strip_prefix("<g")?.split_once('>')?;
    let (inner, rect) = rest.split_once(CLIP)?;
    let rect = rect.strip_suffix("\"/></clipPath></defs>")?;
    let rest = g.replacen(" clip-path=\"url(#a)\"", "", 1);
    if rest.len() == g.len() {
        return None;
    }
    let (x, r) = rect.split_once(' ')?;
    let (y, r) = r.split_once('h')?;
    let (w, r) = r.split_once('v')?;
    let (h, _) = r.split_once('H')?;
    let inner = if rest.is_empty() {
        inner.to_string()
    } else {
        format!("<g{rest}>{inner}</g>")
    };
    Some((format!("{x} {y} {w} {h}"), inner))
}

#[cfg(test)]
mod tests {
    use super::*;

    const GEO: [&str; 11] = [
        "d",
        "cx",
        "cy",
        "r",
        "rx",
        "ry",
        "x",
        "y",
        "width",
        "height",
        "transform",
    ];

    fn geo(s: &str) -> Vec<(&str, &str)> {
        let p: Vec<&str> = s.split('"').collect();
        p.chunks(2)
            .filter_map(|c| Some((c[0].rsplit(' ').next()?.strip_suffix('=')?, *c.get(1)?)))
            .filter(|(k, _)| GEO.contains(k))
            .collect()
    }

    #[test]
    fn every_shape_is_the_source_shape() {
        let dir = Path::new(env!("CARGO_MANIFEST_DIR")).join("../../optimized");
        let mut n = 0;
        for (style, _) in STYLES {
            for e in fs::read_dir(dir.join(style)).unwrap() {
                let path = e.unwrap().path();
                let svg = read(&path).unwrap();
                let (view, body) = icon(&svg, "p-").unwrap();
                let (src, out) = (geo(svg.split_once('>').unwrap().1), geo(&body));
                let v: Vec<&str> = view.split(' ').collect();
                let clip = format!("M{} {}h{}v{}H{}z", v[0], v[1], v[2], v[3], v[0]);
                let cut = src.len() == out.len() + 1 && src.last() == Some(&("d", clip.as_str()));
                assert_eq!(
                    &src[..src.len() - cut as usize],
                    &out[..],
                    "{}",
                    path.display()
                );
                n += 1;
            }
        }
        assert_eq!(n, 2805);
    }

    #[test]
    fn names_split_into_words() {
        for (name, k) in [
            ("ArrowLineLeft", "ARROW_LINE_LEFT"),
            ("XCircle", "X_CIRCLE"),
            ("ARM64", "ARM64"),
            ("AWSlogo", "AWS_LOGO"),
            ("OpenAIlogo", "OPEN_AI_LOGO"),
            ("BarChart2", "BAR_CHART2"),
            ("A11y", "A11Y"),
            ("x86", "X86"),
        ] {
            assert_eq!(constant(name), k);
        }
    }
}
