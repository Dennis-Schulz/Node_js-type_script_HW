import { Router } from "express";
import { myGetController, myPostController } from '../controllers/myControllers.js';
const router = Router();
router.get('/', myGetController);
router.post('/post', myPostController);
export default router;
//# sourceMappingURL=myRoutes.js.map