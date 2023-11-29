import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (user && (await user.checkPassword(password))) {

        generateToken(res, user._id)
        res.status(200).json({
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
    const { email, name, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400)
        throw new Error('User already exist');
    };

    const user = await User.create({
        email,
        name,
        password,
    });
    generateToken(res, user._id)

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });

    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }

});

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({ message: 'Logged out successfully!' })
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404)
        throw new Error('User not found')
    }
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password
        };

        const updateUser = await user.save();

        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
        });
    } else {
        res.status(404)
        throw new Error('User not Found')
    }



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

const updateUser = asyncHandler(async (req, res) => {
    res.send('Update user')
});

export {
    authUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    getUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
}