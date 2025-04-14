import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/review.controller.js";
import { verifyUser } from "../middlewares/verifyUser.js";
import express from "express";

const router =  express.Router();

router.route('/:productId').get(getAllReviews).post(verifyUser,createReview) ;


export default router ;