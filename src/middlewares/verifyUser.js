import supabase from '../utils/supabaseClient.js';

import jwt from 'jsonwebtoken';

export const verifyUser = async (req,res,next) =>{
    try {
        const token = req.headers.authorization?.split(' ')[1] ;
        
        if(!token){
            return res.status(401).json({error:"Missing auth token"}) ;
        }

        const {data,error} = await supabase.auth.getUser(token) ;
       
        if(error || !data.user){
            return res.status(401).json({error:"Invalid auth token"}) ;
        }

        req.user = data.user ;
        next();
    } catch (error) {
        console.log(error.message)
    }
}