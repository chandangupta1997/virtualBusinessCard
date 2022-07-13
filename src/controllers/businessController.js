const businessCardModel = require('../models/businessCardModel')
const awsConnection = require('../configs/awsConnection')

const { default: mongoose } = require("mongoose") // just for checking object id validation 


const createBusCard = async function(req,res){

    let logo = req.files
    let  formData = req.body


    //destruturing for validation purpose 

    let { name, designation, companyName, contactNo, emailId,websiteUrl,socialMediaLinks } = formData



    let  companyLogo = await awsConnection.uploadProfileImage(logo)
        if (!companyLogo) return res.status(400).send({ status: false, message: "upload error" })

        console.log(companyLogo)
       
        const createDataNow = {
            "name": name,
            "designation": designation,
            "companyName": companyName,
            "contactNo": contactNo,
            "websiteUrl": websiteUrl,
            "socialMediaLinks" :socialMediaLinks,
            "emailId": emailId,
            "companyLogo":companyLogo
        }
        let card = await businessCardModel.create(createDataNow)
        return res.status(201).send({ status: true, message: `card created successfully`, data: card })


}

const getBusinessCard = async function(req,res){

}

module.exports ={createBusCard,getBusinessCard}