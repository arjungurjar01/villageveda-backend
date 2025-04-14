import mongoose, { Schema } from "mongoose";


const reviewSchema = new Schema({
    productId:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
    },
    username:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

export const Review = mongoose.model("Review",reviewSchema);