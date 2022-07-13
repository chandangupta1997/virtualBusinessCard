const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const businessSchema = new mongoose.Schema({

    name:{
        type:String,
        //required:true,

    },

    designation:{
        type:String,
        //required:true,

    },

    companyName:{
        type:String,
       // required:true,

    },
    contactNo:{
        type:Number,
       // required:true,

    },

    emailId:{
        type:String,
       //required:true,

    },
    
    companyLogo:{
        type:String,
       // required:true,

    },
    
    websiteUrl:{
        type:String,
      // required:true,

    },

    socialMediaLinks:[

        {
            type:String,


        },
        
        {
            type:String,
            

        },
        
        {
            type:String,
            

        },



    ],
        



    

    isDeleted : {
        type : Boolean ,
        default : false
    },

})


module.exports = mongoose.model('BusinessDetails', businessSchema) 
