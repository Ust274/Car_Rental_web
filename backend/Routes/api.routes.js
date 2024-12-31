import {Router} from 'express';
import { signupController, loginController } from '../Controllers/Controller.js';


const router = Router();
router.post('/signup',signupController )
router.post('/login', loginController)

export default router;