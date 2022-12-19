import express from 'express'

const router = express.Router();

//middleware
import { requireSignin, isAdmin } from "../middleware/auth.js";

//controllers
import { register, login, secret } from "../controllers/auth.js";

router.post('/register', register);
router.post('/login', login);
router.get("/auth-check", requireSignin, (req, res) => {
    res.json({ ok: true });
});

//testing
router.get('/secret', requireSignin, isAdmin, secret);

export default router;