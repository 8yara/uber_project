const express = require('express');
const app = express();
app.use(express.json());
const router =express.Router();

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  const Schema = mongoose.Schema;
  const userSchema =Schema ({
     username:String,
     password: String,
     email:String ,
     token:String ,
     role: String,
     currentLocation : Object,
     available: Boolean,
     mobileNumber:Number ,
     currentCar:{ type: Schema.Types.ObjectId, ref: 'car' }
 
  }) 

  const Story = mongoose.model('user', storySchema);
  module.exports=router;