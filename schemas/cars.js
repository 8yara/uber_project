const express = require('express');
const app = express();
app.use(express.json());
const router =express.Router();

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  const Schema = mongoose.Schema;
  const carsSchema =Schema ({
    carModel:String,
    carYear:Number,
    license:String,
    plateNumbers:Number,
    driver:{ type: Schema.Types.ObjectId, ref: 'user' }
  }) 
  const Story = mongoose.model('car', storySchema);
    
  module.exports=router;