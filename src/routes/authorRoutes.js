const express=require('express');
const authorRouter=express.Router();

function router(nav)
{
    var authors=
    [
        {
            title:'JAMES KAMAROON',
            place:'JAMES CAMORRON',
            genre:'FICTION',
            img:"ro.jpg"
        },
        {
            title:'JAIK JAMES',
            place:'JAIK JAMES',
            genre:'CLASSIC',
            img:"ja.jpg"
        },
        {
            title:'ROBERT BGG',
            place:'LORINATOR',
            genre:'HORROR',
            img:"jaik.jpg"
        }
    ]
    authorRouter.get('/',function(req,res)
    {
        // res.sendFile(__dirname+"/src/views/index.html");
        res.render("authors",{
         nav,
         title:'library',
         authors
        });
    });
    // booksRouter.get('/single',function(req,res)
    // {
    //     res.send("haiii");
    // });
    authorRouter.get('/:id',function(req,res)
    {
        const id=req.params.id
        res.render('author',{
            nav,  
            title:'library',
            author:authors[id]
        });
    });
    return authorRouter;


}

module.exports = router;