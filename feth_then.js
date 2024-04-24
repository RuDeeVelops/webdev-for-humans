fetch("https://apis.scrimba.com/bored/api/activity") // promise is returned and pending
  .then(function (resolve) {
    // we use .then() on the promise. We give it only one parameter: a callback function that resolves the promise
    return resolve.json(); // by calling the resolve callback function we set the promise as resolved and return the JSON data.
  })
  .then(function (data) {
    console.log("This is the data:", data); // Log the resulting data
  });

// STILL A LOT TO LEARN AND UNDERSTAND. TO BE EXPANDED.
