const express=require('express');
const booksRouter=express.Router();


 const Bookdata = require('../model/Bookdata');
function router(nav)
{
    // var books=
    // [
    //     {
    //         title:'THE JUNGLE',
    //         author:'THE WILD',
    //         genre:'HORROR',
    //         img:"kl.jpg"
    //     },
    //     {
    //         title:'WRITERS POINT',
    //         author:'MOVE AHEAD ',
    //         genre:'CLASSIC',
    //         img:"km.jpg"
    //     },
    //     {
    //         title:'MOVE AHEAD',
    //         author:'FIRE CLASSIC',
    //         genre:'FICTION',
    //         img:"Kj.png"
    //     }
    // ]
    booksRouter.get('/',function(req,res)
    {
        // res.sendFile(__dirname+"/src/views/index.html");
        Bookdata.find()
        .then(function(books)
        {
            res.render("books",{
                nav,
                title:'library',
                books
               });
        })
        
    });
    // booksRouter.get('/single',function(req,res)
    // {
    //     res.send("haiii");
    // });
    booksRouter.get('/:id',function(req,res)
    {
        const id=req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book)
        {
            res.render('book',{
                nav,  
                title:'library',
                book
            });
        })
        
    });
    return booksRouter;


}

module.exports = router;