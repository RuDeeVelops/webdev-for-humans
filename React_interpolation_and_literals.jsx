// In JSX, you can use curly braces to embed JavaScript expressions in your HTML code.
// {} let us access JavaScript.
// JSX

function App() {
  const firstName = "Joe";
  const lastName = "Schmoe";

  return (
    <h1>
      Hello {firstName} {lastName}!
    </h1>
  );
}

// Let's see a similar example in Vanilla JavaScript:

// Javascript
function App() {
  const firstName = "Joe";
  const lastName = "Schmoe";

  console.log(`Hello ${firstName} ${lastName}!`);
}
