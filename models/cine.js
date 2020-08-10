const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const CineSchema = new Schema({
    name:{
        type: String
    },
    studentnumber:{
        type:String
    },
    rollno:{
        type:String
    },
    branch:{
        type:String
    },
    email: {
        type: String
    },
    dayscholar:{
        type:String
    },
    mobile:{
        type: String
    },
   skills:{
       type:String
   },
   domain:{
       type:String
   }
,
links:{
    type:String
}
    
});

const Cine = mongoose.model('cine',CineSchema);
module.exports = Cine;