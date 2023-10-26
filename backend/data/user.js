import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@test.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@test.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@test.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];
