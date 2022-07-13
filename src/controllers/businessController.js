const businessCardModel = require('../models/businessCardModel')
const awsConnection = require('../configs/awsConnection')

const { default: mongoose } = require("mongoose") // just for checking object id validation 


const createBusCard = async function(req,res){

    const userData = req.body
    const logo = req.files


    //destruturing for validation purpose 

    let { name, designation, companyName, contactNo, emailId,websiteUrl,socialMediaLinks } = userData



    let  companyLogo = await awsConnection.uploadProfileImage(logo)
        if (!companyLogo) return res.status(400).send({ status: false, message: "there is an error to upload profile image. for more details move on console" })

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