import express from "express";
import userService from "../controllers/user.controller";

const router = express.Router();
const service = new userService();

router.get("/", async (req, res) => {
    try {
        const userList = await service.getAllUsers()
        res.status(200).json(userList)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users" })        
    }
})
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const userById = await service.getUserById(id)
        res.status(200).json(userById)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user" })
    }
})
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const newUser = await service.createUser(body)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: "Error creating user" })
    }
})
router.put("/:id", async (req, res) => {})
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await service.deleteUser(id)
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json({ message: "Error deleting user" })
    }
})

export default router;