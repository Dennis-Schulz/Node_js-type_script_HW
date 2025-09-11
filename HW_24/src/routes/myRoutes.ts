import { Router } from "express";
import{myGetController, myPostController} from '../controllers/myControllers'

const router: Router = Router();

router.get('/', myGetController);
router.post('/post', myPostController);


export default router;