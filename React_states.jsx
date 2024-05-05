// States are used to store data that changes over time.
// The beauty of React is that it automatically re-renders the component and DOM whenever the state changes.
// We don't have to manually update the DOM like in Vanilla JS using a variety of methods like .textContent, .innerHTML, etc.
// *********************
// *********************
// *********************
//
// Here's a simple basic example of creating a simple counter in React (from Scrimba):
// 1. We import the useState hook from React.
// 2. The useState is our State. It's what will change.
// 3. Since it's a counter we want to have an initial value of 0.
// 4. We destructure the useState into the current state value (0) and a "state setter" function.
// 4b. whatever we pass to the state setter function (setCount) will be the new value of the state.
// 5. We create a function called increment that will increment the count by 1.
// 7. We render a button element that increments "count" when clicked we do this by calling the state update function setCount with the new value.
// 8. React will automatically re-render the component and update the DOM with the new value of count.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}> {count} </button>;
}

export default Counter;

// In classical vanilla JS, we would have to manually update the DOM like this:

let count = 0;
document.getElementById("counterButton").addEventListener("click", function () {
  count++;
  this.textContent = count;
});
