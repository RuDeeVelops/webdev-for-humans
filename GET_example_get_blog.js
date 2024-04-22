/* Title: 4 ways of fetching and displaying elements from an API (Scrimba Challenge)

Fetching the first 5 posts from the API and displaying their titles and bodies on the page.
 */

// OPTION 1
/* Building a string of HTML in a map and join chain: */

fetch("https://example.com/api/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    const postsHTML = postsArr
      .map(
        (post) => `
           <div class="post">
               <h3>${post.title}</h3>
               <p>${post.body}</p>
           </div>
       `
      )
      .join("");
    document.body.innerHTML += postsHTML;
  });

// OPTION 2
/* Creating and appending div elements in a forEach loop:*/

fetch("https://example.com/api/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    postsArr.forEach((post) => {
      const div = document.createElement("div");
      div.classList.add("post");
      div.innerHTML = `
               <h3>${post.title}</h3>
               <p>${post.body}</p>
           `;
      document.body.appendChild(div);
    });
  });

// OPTION 3
/* Building a string of HTML in a forEach loop: */

fetch("https://example.com/api/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let postsHTML = "";
    postsArr.forEach((post) => {
      postsHTML += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
    document.getElementById("posts").innerHTML = postsHTML;
  });

// OPTION 4
/* Building a string of HTML in a for...of loop: */
fetch("https://example.com/api/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let postsHTML = "";
    for (const post of postsArr) {
      postsHTML += `
               <div class="post">
                   <h3>${post.title}</h3>
                   <p>${post.body}</p>
               </div>
           `;
    }
    document.body.innerHTML += postsHTML;
  });

// OPTION 1: This approach is more concise and could be more efficient if you're adding a large number of elements to the page, as it only modifies the DOM once. However, it involves building a string of HTML in your JavaScript, which some developers prefer to avoid.

// OPTION 2: Creating and appending div elements in a forEach loop: This approach is straightforward and easy to understand. It's a good choice if you want to keep your JavaScript and HTML separate, as it doesn't involve building a string of HTML in your JavaScript. However, it could be less efficient if you're adding a large number of elements to the page, as each call to appendChild modifies the DOM.

// OPTION 3: Building a string of HTML in a forEach loop and inserting it into a specific div: This approach is similar to the previous one, but it inserts the posts into a specific div rather than appending them to the body. This gives you more control over where the posts are displayed on the page.

// OPTION 4: Building a string of HTML in a for...of loop: This approach is similar to the forEach approach, but some developers find the for...of syntax to be more readable. Like the map and join approach, it could be more efficient if you're adding a large number of elements to the page.
