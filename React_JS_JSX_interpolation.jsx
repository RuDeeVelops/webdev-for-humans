// In React we're by default in Javascript.
// Whatever we write inside the angle brackets is JSX.

<h1>This is JSX</h1>
// When we are INSIDE JSX, we can use curly braces to write JavaScript from within JSX
<h1>{"This is a string in Javascript"}</h1>



// example

function App() {   // Javascript
  const firstName = "Joe"; // Javascript
  const lastName = "Schmoe"; // Javascript

  return ( // Javascript
    <h1>  {/* JSX */}
      Hello {firstName} {lastName}! {/* JSX  with Javascript*/} 
    </h1> {/* JSX */}
  ); // Javascript
} // Javascript


