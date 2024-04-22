// Example syntax of a typical POST request using fetch API

fetch("https://example.com/api/posts", {
  method: "POST", // The HTTP method used for the request. It can be GET, POST, PUT, DELETE, etc.
  body: JSON.stringify({ key: "value" }), // The request body, which is a JSON string
  headers: { "Content-Type": "application/json" }, // The content type of the request body
});

// In the above example, we are making a POST request to the URL "https://example.com/api/posts" with a JSON string as the request body. The "Content-Type" header specifies that the request body is in JSON format.

// Real use example of a POST request using fetch API from a form data retrieved by a simply click event listener

document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  fetch("https://example.com/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.getElementById("post-title").value,
      body: document.getElementById("post-body").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
});

// In the above example, we are making a POST request to the URL "https://apis.scrimba.com/jsonplaceholder/posts" with the title and body values retrieved from the input fields with the IDs "post-title" and "post-body" respectively. The request body is a JSON string containing the title and body values, and the "Content-Type" header specifies that the request body is in JSON format.

// If we want to console.log the response from the server, we can add another .then() method to the fetch request:

document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  fetch("https://example.com/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.getElementById("post-title").value,
      body: document.getElementById("post-body").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()) // Convert the JSON string in the response into a JavaScript object
    .then((data) => console.log(data)); // Access the data from the JSON object
});
