# project- virtual business card (propel Theory)


#Chandan Gupta 

Key points
this is simple backend projects where user post a request to get its virtual business card 
********************Business Cart  Model********************
Name of the Person
Designation :string
Company Name :String 
Contact Number : Number
Email ID : string 
Website URL : string 
Three social URLs : array of string or objects 
Company Logo   :   req.files (will return a aws s3 bucket link )



# approach 

followed rest api standards
maintain endpoints
well classified and efficent code
easy to intigrate 





Endpoint: BASE_URL/BusinessCard

POST /functionup/interns
Create a document for an intern.





Response
Successful Response structure
{
  status: true,
  data: {

  }
}
Error Response structure
{
  status: false,
  message: ""
}

Response samples

{
    "status": true,
    "message": "card created successfully",
    "data": {
        "name": "chandan",
        "designation": "CEO",
        "contactNo": 8700491144,
        "emailId": "ceo@goodfood.com",
        "companyLogo": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/sonuVerma/them-snapshots-SpxdCKl7qc8-unsplash.jpg",
        "websiteUrl": "goodfood.com",
        "socialMediaLinks": [
            "d,e,f"
        ],
        "isDeleted": false,
        "_id": "62cedc24e83d15dcf438c77d",
        "__v": 0
    }
}