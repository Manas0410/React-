/**
 * JAVASCRIPT DATA TRANSFORMATION CHALLENGE
 * ----------------------------------------
 * Your Tasks:
 * 1. normalizeUsers(users)
 *    - Trim whitespace from names and convert them to Title Case
 *      (e.g., "  jOhN DOE " → "John Doe")
 *    - Convert age to a Number (invalid ages → null)
 *    - Convert active status to a boolean
 *      (accepts "true"/"false", "yes"/"no", 1/0)
 *    - Convert joined to a Date object (invalid dates → null)
 *    - Do NOT mutate the original array
 *
 * 2. getUserStats(users)
 *    - Returns:
 *        {
 *          totalUsers: <number>,
 *          averageAge: <average of valid ages rounded to 2 decimals>,
 *          activeUsers: <count of active users>,
 *          recentJoiners: <array of names of users who joined after 2022-01-01>
 *        }
 *
 * 3. (Bonus) groupByActiveStatus(users)
 *    - Returns:
 *        {
 *          active: [ <active users> ],
 *          inactive: [ <inactive users> ]
 *        }
 */

const rawUsers = [
  { name: "  aLICE smiTh ", age: "28", active: "true", joined: "2022-01-15" },
  { name: "BOB jones", age: 31, active: false, joined: "2021-05-04" },
  { name: "carol   DOe ", age: "NaN", active: "no", joined: "2023-03-10" },
  { name: "david   green", age: 22, active: 1, joined: "invalid-date" },
];

// TODO: Implement this
function normalizeUsers(users) {
  // return a new array of normalized users
  // Helper: convert string to title case
  function toTitleCase(str) {
    return str
      .trim()
      .split(/\s+/)
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return users.map((user) => {
    const normalizedAge = Number(user.age);
    const parsedDate = new Date(user.joined);
    return {
      name: toTitleCase(user.name),
      age: isNaN(normalizedAge) ? null : normalizedAge,
      active: ["true", "yes", 1, true].includes(user.active),
      joined: isNaN(parsedDate.getTime()) ? null : parsedDate,
    };
  });
}

// TODO: Implement this
function getUserStats(users) {
  // return user statistics object
  const totalUsers = users.length;

  const validAges = users
    .map((user) => user.age)
    .filter((age) => typeof age === "number" && !isNaN(age));

  const averageAge =
    validAges.length === 0
      ? 0
      : parseFloat(
          (
            validAges.reduce((sum, age) => sum + age, 0) / validAges.length
          ).toFixed(2)
        );

  const activeUsers = users.filter((user) => user.active === true).length;

  const recentJoiners = users
    .filter((user) => user.joined && user.joined > new Date("2022-01-01"))
    .map((user) => user.name);

  return {
    totalUsers,
    averageAge,
    activeUsers,
    recentJoiners,
  };
}

// BONUS
function groupByActiveStatus(users) {
  // return object grouping users by active status
  const active = users.filter((user) => user.active === true);
  const inactive = users.filter((user) => user.active === false);
  return { active, inactive };
}

// Example expected usage (should work after your implementation)
console.log(normalizeUsers(rawUsers));

// calling these two with normalised versions instead of rawUsers
const normalisedUsers = normalizeUsers(rawUsers);
console.log(getUserStats(normalizeUsers(normalisedUsers)));
console.log(groupByActiveStatus(normalizeUsers(normalisedUsers)));
