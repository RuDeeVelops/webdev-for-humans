// a few ideas to "deconstruct" arrays and object in javascript
// 1. destructuring assignment
// 2. spread operator
// 3. rest operator
// 4. object destructuring
// 5. array destructuring
// 6. destructuring function arguments
// 7. destructuring function arguments with default values

// 1. destructuring assignment
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// 2. spread operator
const [c, ...d] = [1, 2, 3, 4, 5];
console.log(c); // 1
console.log(d); // [2, 3, 4, 5]

// 3. rest operator
const [e, f, ...g] = [1, 2, 3, 4, 5];
console.log(e); // 1
console.log(f); // 2
console.log(g); // [3, 4, 5]

// 4. object destructuring
const { h, i } = { h: 1, i: 2 };
console.log(h); // 1
console.log(i); // 2

// 5. array destructuring
const [j, k] = [1, 2];
console.log(j); // 1
console.log(k); // 2

// 6. destructuring function arguments
const l = ([m, n]) => {
  console.log(m); // 1
  console.log(n); // 2
};
l([1, 2]);

// 7. destructuring function arguments with default values
const o = ([p = 1, q = 2] = []) => {
  console.log(p); // 1
  console.log(q); // 2
};
o();
