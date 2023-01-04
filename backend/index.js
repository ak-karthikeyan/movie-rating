const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const port = 5000;

const mongo_uri = "mongodb+srv://heroviredTeamX:Herovired0311@lrcprd.gh76kgq.mongodb.net/karthikeyanmovies360"
mongoose.connect(mongo_uri)
const dataschema = {
    id:Number,
    movieName:String,
    movieDetails:String,
    moviePoster:String,
    movieRating: Number
}
const Movies = mongoose.model('movies',dataschema)

const userschema = {
    id:Number,
    name:String,
    rating:String,
    review:String
}
const User = mongoose.model('user',userschema)

app.use(bodyParser.json())

app.use(cors())
app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/review', async (req, res) => {

    console.log(req.body)

    let doc = await Movies.findOneAndUpdate({id: req.body.movieId} , { movieRating: req.body.rating}, {
        new: true
      });
    // Movies.findOneAndUpdate({id: req.body.movieId} , { movieRating: req.body.rating}, () => {

    // });
    console.log("doc" , doc)
      
    const newReview = new User({ ...req.body });

    // const data = new Movies({
    //     id: docs.id+1,
    //     movieName: req.body.movieName,
    //     movieDetails: req.body.movieDetails,
    //     moviePoster: req.body.moviePoster
    // })
    newReview.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: "Review added successfully" });
      }
    });
})


app.get('/movies/review',  async (req, res) => {
    await User.find((err, result) => {
        if(result) {
          res.send(result);
        } else {
          res.send(err);
        }
      }).clone();  
  })

app.post('/addmovie',(req, res) => {
    Movies.findOne({}, {}, { sort: { 'id' : -1 } }, function(err, docs){
        console.log("docs", docs)
        if (err){
            res.send("ERROR" , err)
        }else{
            const data = new Movies({
                id: docs.id+1,
                movieName: req.body.movieName,
                movieDetails: req.body.movieDetails,
                moviePoster: req.body.moviePoster,
                movieRating: req.body.movieRating
            })
            data.save((err,docs)=>{
                if(err){
                    res.send("ERROR" , err)
                }else{
                    res.send("Data Saved")
                }
            })
        }
    })
});

app.get('/movies', (req,res)=>{
    
    Movies.findOne({}, {}, { sort: { 'id' : -1 } }, function(err, docs){
        if (err){
            res.send("ERROR")
        }else{
            // var ranId = Math.floor(Math.random() * docs.id);
            Movies.find((err,docs)=>{
                if(err){
                    res.send("No Data")
                }else{
                    res.send(docs)
                }
            }) 
        }
    })
});

app.get('/movies/:id', async (req, res) => {
    console.log(req.params.id)
   await Movies.findOne({id :req.params.id}, (err, result) => {
        if(result) {
          res.send(result);
        } else {
          res.send(err);
        }
      }).clone(); 
    })


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
