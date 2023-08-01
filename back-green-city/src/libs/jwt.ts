import jwt from "jsonwebtoken";
import config from "../config";
// { id: newUser._id.toString() }
const createAccesToken = (payload: any) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

export default createAccesToken;
