const jwt = require('jsonwebtoken');



module.exports=(req,res,next)=>{
    /* get the auth-token from header  */
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send('Access denied ');
    }

    /* if token found then verify it */
    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        res.user  = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
};