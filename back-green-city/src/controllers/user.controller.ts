import User from "../models/user.model";

class userService {
    constructor() { }
    getAllUsers = async () => {
        const users = await User.find();
        return users;
    }
    getUserById = async (id: string | number) => {
        const user = await User.findById(id);
        return user;
    }
    createUser = async (body: any) => {
        const { name, lastName, email, password, role } = body;
        const newUser = await User.create({ name, lastName, email, password, role});
        return newUser;
    }
    updateUser = async (id: string | number) => {
        const user = await User.updateOne()
    }
    deleteUser = async (id: string | number) => {
        try {
            await User.deleteOne({"_id":id});
            return true
        } catch (error) {
            console.log("error deleting user", error)
        }
        
    }
}

export default userService;