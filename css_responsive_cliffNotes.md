# CSS Cliff Notes for Responsive Design in 2024

- Use `rem` for `font-size` to ensure consistent scaling across different elements.
- Use `em` for `padding`, `margin`, and other spacing to ensure relative scaling based on the `font-size` of the element.
- Use `vh`, `vw`, `vmin`, and `vmax` for viewport-based sizing to ensure elements scale based on the size of the viewport.
- Use unitless `line-height` of `1.5` to ensure consistent spacing relative to the `font-size`.
- Use percentages for `width`, `height`, and other layout properties to ensure flexibility and responsiveness.
- Use `px` for `max-width`, `border-width`, `box-shadow`, and other properties that require fixed values.

## Optionals

- For images, particularly in grids, consider `width`, `height` to 100% and `object-fit:cover` so they maintain their aspect ratio while resizing.
- Consider a `boz-sizing:border-box` reset on all CSS and pseude selectors `*, *::before, *::after {}`
- Consider a full margin and padding reset to avoid nasty things (like margin collapse where top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.)
- Consider designing "mobile first" and then expand for wider screens via media queries, instead of the opposite.
