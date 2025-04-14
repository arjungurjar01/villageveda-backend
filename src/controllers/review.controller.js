import { Review} from "../models/review.model.js";

const getAllReviews = async(req,res) =>{
    try {
        const {productId} = req.params ;
        //get all review
        const reviews = await Review.find({productId}).sort({created_at : -1}); 
        
        //get unique user id from review
        const userIds = [...new Set(reviews.map(review=>review.user_id))]
        res.status(200).json({success:true,message:'review fetch successfully',reviews}); 

    } catch (error) {
        res.status(500).json({message:'Error fetching reviews '})
    }
}

const createReview = async (req,res) =>{
    try {
        const {productId} = req.params ;
        const {rating,comment,username} = req.body ;
        const user = req.user ;

        const newReview = new Review({
            productId,
            user_id:user.id,
            username,
            avatar:user.user_metadata.avatar_url || '',
            rating,
            comment,
            created_at : new Date()
        })
        await newReview.save();
        res.status(201).json({ success:true , message: "Review added successfully" , newReview });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error saving review" });
    }
}

const updateReview = async()=>{
    try {
        
    } catch (error) {
        
    }
}

const deleteReview = async()=>{
    try {
        
    } catch (error) {
        
    }
}



export {getAllReviews,createReview} ;