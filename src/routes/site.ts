import { Router } from "express";
import * as user from '../controllers/user';
import * as content from '../controllers/content';

const router = Router();

router.get('/ping', (req, res) => res.json({ pong: true }));

router.post('/user', user.addUser);
router.post('/user/login', user.loginUser);
router.get('/user/:id', user.getUserById);

router.get('/content/videos', content.getVideosContent);

export default router;