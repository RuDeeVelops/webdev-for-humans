// A React component is a function that returns JSX code allowing us to create reusable UI components.
// "React allows us to build bits of webpages that can be reused and composed together to create a full web page."
// The function is the "bit" or React component. It's written with pascal case, first letter capitalized.
// We "insert it" into the webpage by calling ReactDOM.createRoot(document.getElementById("root")).render(Page);

function Page() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default Page;
