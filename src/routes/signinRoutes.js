const express=require('express');
const signinRouter=express.Router();

function router(nav)

   {
    signinRouter.get('/',function(req,res)
    {
        res.render('signin',{
            nav,
            title:'library',
            
        })

    });
    return signinRouter;

}
module.exports=router;