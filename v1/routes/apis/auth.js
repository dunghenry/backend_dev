import express from 'express';
import authController from '../../controllers/apis/authController.js';
const router = express.Router();
router.post('/register', authController.register);
export default router;