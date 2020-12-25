const express=require('express');
const signUpRouter=express.Router();

function router(nav)

   {
    signUpRouter.get('/',function(req,res)
    {
        res.render('signUp',{
            nav,
            title:'library',
            
        })

    });
    return signUpRouter;

}
module.exports=router;