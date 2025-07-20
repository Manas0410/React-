// 3. Advanced JavaScript Round
// 🟢 Question:

// Write a function that replaces placeholders in a deeply nested object (including arrays and objects).

// ✅ Sample Answer:
// I was given an object like this:

const input = {
  name: "{{user.name}}",
  hobbies: ["{{user.hobby1}}", "{{user.hobby2}}"],
  profile: {
    age: "{{user.age}}",
    address: {
      city: "{{user.city}}",
    },
  },
};
// And a context object like:

const context = {
  user: {
    name: "Sanskrati",
    hobby1: "Coding",
    hobby2: "Reading",
    age: 26,
    city: "Bengaluru",
  },
};

const replacePlaceholders = (input, context) => {
  if (Array.isArray(input)) {
    return input.map((item) => replacePlaceholders(item, context));
  } else if (typeof input === "object" && input !== null) {
    for (let key in input) {
      input[key] = replacePlaceholders(input[key], context);
    }
    return input;
  } else if (typeof input === "string") {
    if (input.startsWith("{{") && input.endsWith("}}")) {
      const path = input.slice(2, -2).split(".");
      return context?.[path[0]]?.[path[1]] ?? input;
    }
  }
  return input;
};

console.log(replacePlaceholders(input, context));
