# project- virtual business card (propel Theory)


Chandan Gupta 

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



POST /functionup/colleges
Create a business Card -  not.

Endpoint: BASE_URL/functionup/colleges

POST /functionup/interns
Create a document for an intern.

Also save the collegeId along with the document. Your request body contains the following fields - { name, mobile, email, collegeName}

Return HTTP status 201 on a succesful document creation. Also return the document. The response should be a JSON object like this

Return HTTP status 400 for an invalid request with a response body like this

GET /functionup/collegeDetails
Returns the college details for the requested college (Expect a query parameter by the name collegeName. This is anabbreviated college name. For example iith)
Returns the list of all interns who have applied for internship at this college.
The response structure should look like this
Testing
To test these apis create a new collection in Postman named Project 2 Internship
Each api should have a new request in this collection
Each request in the collection should be rightly named. Eg Create college, Get college details etc
Each member of each team should have their tests in running state
Refer below sample

A Postman collection and request sample




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
Collections samples
{
    "status": true,
    "message": "card created successfully",
    "data": {
        "name": "chandan",
        "designation": "CEO",
        "companyName": "GoodFood",
        "contactNo": 8700491177,
        "emailId": "chandanokokok@gmail.com",
        "companyLogo": "false",
        "websiteUrl": "goodfood.com",
        "socialMediaLinks": [
            "[{abc},{efg},{iop}]"
        ],

       "companyLogo": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/sonuVerma/raphael-renter-csae9W8JAsw-unsplash.jpg",
       
        "isDeleted": false,
        "_id": "62ce73e69a3186f7dbb9e20d",
        "__v": 0
    }
}
