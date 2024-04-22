## REST, RESTful API and CRUD

- **REST** (representational state transfer) is a style of software architecture.
- The main idea is that everything is a stand-alone **resource**. A resource is an object that can be accessed and modified by the client (for example in a weather app the resources could be the weather data, the cities, the forecasts, etc).
- A **RESTful API** is an agnostic way to provide access to such resources. The client can access the resources using the HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) or the CRUD operations (Create, Read, Update, Delete).
- They are also **stateless**. In layman's terms this means that the server does not store any information about the client's state between requests. Each request from the client must contain all the necessary information for the server to understand and process the request.
- **JSON data** is a common way to exchange information in **RESTful APIs**
- The Server doesn't care how the client represent the resource, it just sends the data and the client can choose how to represent it.
- This is useful when the client and the server don't use the same language or when the client wants to display the data in a different way.
