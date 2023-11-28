import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken"

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (user && (await user.checkPassword(password))) {
        const token = jwt.sign({ id: 7, role: "captain" }, process.env.JWT_SECRET);

        return res
            .cookie("jwt", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            }).status(200)
            .json({ message: "Logged in successfully" });

    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
});

const registerUser = asyncHandler(async (req, res) => {
    res.send('Register user')
});

const logoutUser = asyncHandler(async (req, res) => {
    res.send('Logout user')
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('Get user profile')
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('Update user profile')
});

const getUsers = asyncHandler(async (req, res) => {
    res.send('Get users')
});

const deleteUser = asyncHandler(async (req, res) => {
    res.send('Delete user')
});

const getUserByID = asyncHandler(async (req, res) => {
    res.send('Get user by id')
});

export {
    authUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    getUserProfile,
    getUsers,
    deleteUser,
    getUserByID
}