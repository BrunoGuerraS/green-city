import bcrypt from "bcrypt";
import createAccesToken from "../libs/jwt";
import User from "../models/user.model";

export const register = async (req: any, res: any) => {
  const { name, lastName, email, password } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, lastName, email, password: hashpassword });
  const token = await createAccesToken({ id: newUser._id.toString() });
  console.log("newUser", newUser);
  res.send({
    jwt: token,
  });
};

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, userFound?.password ?? "");
    const token = await createAccesToken({ id: userFound?._id.toString() });
    console.log("isMatch", isMatch);
    res.cookie("jwt", token);
    res.status(200).json({
      msg: "login success",
    })
  } catch (error) {
    console.log("error", error);
    res.send({
      msg: "login error",
    })
  }
};

export const logout = async (req: any, res: any) => {
  res.cookie('jwt', '', { expires: new Date(0) })
  res.status(200).json({ msg : "logout" })
}
