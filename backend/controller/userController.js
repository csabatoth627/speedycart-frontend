import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email})

    if(user && (await user.checkPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
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