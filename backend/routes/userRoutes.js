import express from 'express';
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    getUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
} from '../controller/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(protect, admin, getUsers).post(registerUser);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').get(protect, admin, getUserByID).delete(protect, admin, deleteUser).put(protect,admin, updateUser);

export default router;
