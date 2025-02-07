import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mongoose from 'mongoose';
import Camps from './models/camp.js';



const port = 8000;
const app = express();

const URL ='mongodb://localhost:27017/camp';

mongoose
.connect(URL)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(`DB error connection ${err}`))

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Port is running at ${port}`);
});



const handleError = (res, error) => {
  res.status(500).json({error})
}





const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};


app.use(express.json());

app.use((req, res, next) => res.set(CORS) && next());

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/camp', (req, res) => {

   Camps
   .find()
   .sort({date: 1})
   .then((camp) => {
     res
     .status(200)
     .json(camp)
   })
   .catch(() => handleError(res, "Something goes wrong"));

   
 });


 app.get('/camp/:id', async (req, res) => {
  const { id } = req.params;


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return handleError(res, "wrong Id");
  }

  try {
  
    const doc = await Camps.findById(id);

   
    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    
    res.status(200).json(doc);
  } catch (error) {
    handleError(res, "Something goes wrong");
  }
});


app.post('/camp', async (req, res) => {
  try {
    const { tent, bag, rug, set, days, date, name, tel } = req.body;

   
    const newCamp = new Camps({
      tent,
      bag,
      rug,
      set,
      days: parseInt(days), 
      date: new Date(date),
      name,
      tel: parseInt(tel), 
    });

  
    const savedCamp = await newCamp.save();
    res.status(201).json(savedCamp);
  } catch (error) {
    handleError(res, "Something goes wrong");
  }
});





  




