# project- virtual business card (propel Theory)


#Chandan Gupta 

# approach 

1) end points for where user can post the request
2) use mongoose (mongo db ) to store json data. 
3) end points for get request. 
4) space for intigration. 

followed rest api standards
Endpoint: BASE_URL/BusinessCard
maintain endpoints
well classified and efficient code
easy to intigrate  (with user authentication and authorization ) 


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
