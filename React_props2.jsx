// Notes from Official React docs.

// Look for a prop called "whatever", store it into a same name constant, and display it in the button.
// We are using destructuring to access the props. This is a cleaner way to access props.

function Square({ whatever }) {
  return <button className="square">{whatever}</button>;
}

// if we didn't use destructuring, we'd have to access the props like this:
/*
 function Square(props) {
  const whatever = props.whatever;
  return <button className="square">{whatever}</button>;
}
 */

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square whatever="1" />
        <Square whatever="2" />
        <Square whatever="3" />
      </div>
      <div className="board-row">
        <Square whatever="4" />
        <Square whatever="5" />
        <Square whatever="6" />
      </div>
      <div className="board-row">
        <Square whatever="7" />
        <Square whatever="8" />
        <Square whatever="9" />
      </div>
    </>
  );
}
