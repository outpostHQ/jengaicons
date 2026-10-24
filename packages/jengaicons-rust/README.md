# jengaicons

The Jenga icon set for Rust: 1437 `regular`, 1242 `fill` and 126 `mono` SVG icons. Each icon is a
constant, so a binary carries only the icons that its code names. No dependencies, no `unsafe`.

```rust
let mut html = String::new();
jengaicons::regular::ARROW_LINE_LEFT.write(&mut html, Some("Back"));
assert!(html.starts_with("<svg viewBox=\"0 0 "));
```

`write` appends an inline `<svg>`, `1em` square and coloured `currentColor`, so CSS `font-size` and
`color` set its size and colour. With a label the icon is an image of that name; without one,
assistive technology skips it. `view()` and `body()` give the parts to a renderer of your own, and
each style's `ALL` lists its icons by name.

Every icon's markup holds only shapes, the colours `none`, `currentColor` and `#fff`, and ids that
no other icon uses, so many icons can share one page. The tests check this for every icon, and a
Kani proof checks that `write` keeps any label inside its attribute.

The icons come from `optimized/` in this repository; `scripts/generate-jengaicons-rust` writes the
modules. MIT licence.
