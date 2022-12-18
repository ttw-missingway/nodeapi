import express from 'express'

const router = express.Router();

//controllers
import { register, login } from "../controllers/auth.js";

router.post('/register', register);
router.post('/login', login);

//testing
router.get('/secret', (req, res) => {
    res.json({ message: "You have access to this secret route" });
});

export default router;