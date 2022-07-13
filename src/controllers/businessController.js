const businessCardModel = require('../models/businessCardModel')
const awsConnection = require('../configs/awsConnection')
const validator = require('../validations/validator')

const { default: mongoose } = require("mongoose") // just for checking object id validation 


const createBusCard = async function(req,res){

    let logo = req.files
    let  formData = req.body

    if(!validator.isValid(formData)){
        return res.status(400).send({status:false,msg:"please provide valid body "})
    }


    //destruturing for validation purpose 
    

    let { name, designation, companyName, contactNo, emailId,websiteUrl,socialMediaLinks } = formData

    if(!validator.isValidPhone(contactNo)){
        return res.status(400).send({status:false,msg:"please provide valid phone number "})
    }

    // for simplicity i avoid more validations as of know 
    // go to validations part for more feature at ../validations/validator
    

    
        



    let  companyLogo = await awsConnection.uploadProfileImage(logo)
        if (!companyLogo) return res.status(400).send({ status: false, message: "upload error" })

        console.log(companyLogo)
       
        const createDataNow = {
            "name": name,
            "designation": designation,
            "companyName": companyName,
            "contactNo": contactNo,
            "websiteUrl": websiteUrl,
            "socialMediaLinks" :[socialMediaLinks],
            "emailId": emailId,
            "companyLogo":companyLogo
        }
        // sending to to create document in mongoDb
        let card = await businessCardModel.create(createDataNow)
        return res.status(201).send({ status: true, message: `card created successfully`, data: card })


}

const getBusinessCard = async function(req,res){


    // every business card will be having a unique id in Mongo db 
    // we just need to fetch that 
    // will recieve in Path-param 

    let cardId = req.params.cardId

    let idCheck = await businessCardModel.findById(cardId)
    if(!idCheck){
        return res.status(404).send({status:false,msg:"no business card found "})
    }

    // we can add authentication and authorization also as a middleware 
    // but this is not requirement as of now 
    // it can easily be integrated 

    return res.status(500).send({status:true,data:idCheck})



}

module.exports ={createBusCard,getBusinessCard}