import { Router } from 'express';
import {
    addComment,
    deleteComment,
    getVideoComments,
    updateComment,
    addReplyToComment,
    getRepliesOfComment
} from "../controllers/comment.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/:videoId").get(getVideoComments).post(addComment);
router.route("/update/:commentId").patch(updateComment);
router.route("/delete/:commentId").delete(deleteComment)
router.route("/reply/:commentId").get(getRepliesOfComment).post(addReplyToComment)


export default router