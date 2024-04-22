// simple example of a GET request using fetch
// The response parameter represents the Response object from the server and the data parameter represents the data from the Response object. The first .then() method is used to convert the Response object into a JSON object, and the second .then() method is used to access the data from the JSON object.
// NOTE: the response and data parameters can be named anything, but they are commonly named response and data. the fetch method implies a GET request, so the method does not need to be specified.

fetch("https://example.com/api/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// components of a request
// 1. URL: the URL of the server to which the request is being sent
// 2. Method: the HTTP method of the request (e.g., GET, POST, PUT, DELETE)
// 3. Headers: additional information about the request (e.g., content type)
// 4. Body: the data being sent with the request (e.g., JSON object)

// the four methods are:
// 1. GET: retrieves data from the server
// 2. POST: sends data to the server
// 3. PUT: updates data on the server
// 4. DELETE: deletes data from the server

// also known as CRUD operations (Create, Read, Update, Delete):
// 1. Create: POST
// 2. Read: GET
// 3. Update: PUT
// 4. Delete: DELETE
