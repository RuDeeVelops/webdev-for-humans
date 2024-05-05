// A react component can use the special style attribute to apply inline styles to the component.
// The style attribute expects an object with camelCased properties.
// In this case we're setting the backgroundColor property to either "#222222" or "none" depending on the value of the on prop.
export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "none",
  };

  return <div style={styles} className="box"></div>;
}
