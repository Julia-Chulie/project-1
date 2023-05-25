import Query from "../model/query.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;
const saltRounds = 10;

export const checkToken = async (req, res) => {
  console.log(req.params);
  try {
    const query = "SELECT email, isAdmin FROM user WHERE id = ?";
    const [user] = await Query.findByValue(query, req.params.id);

    if (user) {
      const msg = "Recovered user successfully";
      res.status(200).json({ msg, user });
    } else {
      const msg = "No account yet";
      res.status(200).json(msg);
    }
  } catch (error) {
    throw Error(error);
  }
};

//Sign up from an account @POST
//ROUTE /user/signup
export const signUp = async (req, res) => {
  console.log(req.body);
  try {
    const query = "SELECT username, email, password FROM user WHERE email = ?";
    const [isUserExist] = await Query.findByValue(query, req.body.email);

    if (!isUserExist) {
      const hashedPWD = await hash(req.body.password, saltRounds);
      const email = req.body.email;
      const query =
        "INSERT INTO user (username, email, password, isAdmin) VALUES (?,?,?,0)";
      const result = await Query.write(query, { email, hashedPWD });

      res.status(201).json("User created successfully", result);
    }
  } catch (error) {
    throw Error(error);
  }
};

//Sign in an existed account @POST
//ROUTE /user/signin
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = "SELECT * FROM user WHERE email = ?";
    const [user] = await Query.findByValue(query, email);
    console.log(email, user);
    if (!user || user.email !== req.body.email) {
      res.status(401).json("Error identification");
      return;
    }
    const isSame = await compare(password, user.password);
    if (isSame) {
      const TOKEN = jwt.sign({ id: user.id }, TOKEN_SECRET);
      const { email } = user;
      res.status(200).json("Connection made successfully", { TOKEN, email });
    } else {
      res.status(401).json("Error identification");
    }
  } catch (error) {
    throw Error(error);
  }
};

//Get all users @GET
//ROUTE /user
export const allUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM user";
    const users = await Query.find(query);
    if (users.length) {
      const msg = "Recovered users successfully";
      res.status(200).json({ msg, users });
    } else {
      const msg = "No users yet";
      res.status(200).json(msg);
    }
  } catch (error) {
    throw Error(error);
  }
};

//Get one user by id @GET
//ROUTE /user/:id
export const oneUser = async (req, res) => {
  try {
    const query = "SELECT * FROM user WHERE id = ?";
    const user = await Query.findByValue(query, req.params.id);

    if (user.length) {
      const msg = "Recovered user successfully";
      res.status(200).json({ msg, user });
    } else {
      const msg = "No account yet";
      res.status(200).json(msg);
    }
  } catch (error) {
    throw Error(error);
  }
};

//Create a user account @POST
//ROUTE /user
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hash(password, saltRounds);
    const query =
      "INSERT INTO user (username, email, password, isAdmin) VALUES (?,?,?,0)";
    const result = await Query.write(query, [username, email, hashedPassword]);
    const msg = "User created successfully";
    res.status(201).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};

//Update a user account @PUT
//ROUTE /user/:id
export const updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hash(password, saltRounds);
    const query =
      "UPDATE user SET username = ?, email = ?, password = ? WHERE id = ?";
    const queryParams = [username, email, hashedPassword, req.params.id];
    const result = await Query.write(query, queryParams);
    const msg = "User updated successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};

//Delete a user account @DELETE
//ROUTE /user/:id
export const deleteUser = async (req, res) => {
  try {
    const query = "DELETE FROM user WHERE id = ?";
    const result = await Query.write(query, [req.params.id]);
    const msg = "User deleted successfully";
    res.status(200).json({ msg, result });
  } catch (error) {
    throw Error(error);
  }
};