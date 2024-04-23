// 1. for loop
// Use a for loop when you're dealing with an array and you need to know the position of each item. Like when you're ranking the top 10 posts in a blog.

const posts = ["post1", "post2", "post3"];
for (let i = 0; i < posts.length; i++) {
  console.log(`Post ${i + 1}: ${posts[i]}`);
}

// 2. forEach
// Use forEach when you just want to do something with each item in an array, like sending a notification to all users.

const users = ["user1", "user2", "user3"];
users.forEach((user) => {
  console.log(`Notification sent to ${user}!`);
});

// 3. for...of
// Use for...of when you want to go through each item in an array (or any iterable), like looping through a list of comments on a post.

const comments = ["comment1", "comment2", "comment3"];
for (const comment of comments) {
  console.log(`Comment: ${comment}`);
}

// 4. for...in
// Use for...in when you want to check out all the properties of an object, like seeing all the keys in a user profile.

const userProfile = { name: "John", age: 30, city: "New York" };
for (const key in userProfile) {
  console.log(`Key: ${key}, Value: ${userProfile[key]}`);
}

// 5. map
// Use map when you want to transform an array into another one, like turning a list of user IDs into user objects.

const userIds = [1, 2, 3];
const usersObjects = userIds.map((id) => ({ id: id, name: `User${id}` }));
console.log(usersObjects);

// 6. filter
// Use filter when you want to pick out certain items from an array, like finding all users who are online.

const onlineStatus = [
  { user: "user1", online: true },
  { user: "user2", online: false },
  { user: "user3", online: true },
];
const onlineUsers = onlineStatus.filter((user) => user.online);
console.log(onlineUsers);

// 7. reduce
// Use reduce when you want to crunch an array down into a single value, like calculating the total score of a game.

const scores = [10, 20, 30];
const totalScore = scores.reduce((accumulator, score) => {
  return accumulator + score;
}, 0);
console.log(`Total score: ${totalScore}`);
