// Let's have a look at a simple conditional CLSX example in Tailwind CSS.
// The clsx boils down to a simple if-else statement. If the condition is true, then the class is applied; otherwise, it is not.

import clsx from "clsx";

const TailwindClsxConditional = () => {
  const isActive = true;

  return <div className={clsx("text-center", isActive && "text-blue-500")}>Hello, Tailwind CSS!</div>;
};

// If isActive is true, then the text color will be blue. Otherwise, it will be the default color.

const SimplifiedExample = () => {
  const pathname = "/home";
  const link = { href: "/home" };

  return <div className={clsx("flex items-center justify-center p-3", { "text-blue-600": pathname === link.href })}>Hello, Tailwind CSS!</div>;
};

// If the pathname matches the link href, then the text color will be blue. Otherwise, it will be the default color.
