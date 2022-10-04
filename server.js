import express from 'express'
import axios from 'axios';
import 'dotenv/config';
import router from './routes/recipeRoutes.js'

const app = express();
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true}));

const port = process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//     res.redirect('/home');
// })
// app.get('/home',(req,res)=>{
//     res.render('index');
// })


// redirects
app.get('/',(req,res)=>{
    res.redirect('/recipeFinder/home');
})
app.get('/home',(req,res)=>{
    res.redirect('/recipeFinder/home');
})

// routes
app.use('/recipeFinder', router)


// 404 route
app.use((req,res)=>{
    res.status(404).render('404')
})

// listening to server
app.listen(port, ()=>{
    console.log('Server Started');
});