const express=require('express');
const app = express();


const nav=[
    {
        link:'/books',name:'books'},
    
    {link:'/authors',name:'authors'},

     {link:'/signUp',name:'signUp'},
     {link:'/admin',name:'add Book'},
    {link:'/signin',name:'signin'}


    
    
    
]; 
const authorRouter = require('./src/routes/authorRoutes')(nav)
const booksRouter = require('./src/routes/bookRoutes')(nav)
// const signupRouter = require('./src/routes/signupRoutes')(nav)

 const signUpRouter = require('./src/routes/signUpRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
 const signinRouter = require('./src/routes/signinRoutes')(nav)

 app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/authors',authorRouter);
app.use('/books',booksRouter);
app.use('/admin',adminRouter);

app.use('/signUp',signUpRouter);
app.use('/signin',signinRouter);


 

app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
     nav,
     title:'library'
    });
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(cors());


// app.use(cookieParser());
// app.use(session({
//     secret: 'positronx',
//     saveUninitialized: false,
//     resave: false
// }));



app.listen(7707);