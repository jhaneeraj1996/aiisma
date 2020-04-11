let router = require('express').Router();
// Set default API response
const SendOtp = require('sendotp');
var msg91Data=""
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
}
var authKey="325874ATXdpE5fYME5e913ffeP1"
const sendOtp = new SendOtp(authKey);

//sendOtp.send("+917667264079",between(10000,99999), callback); 
//sendOtp.retry(contactNumber, retryVoice, callback);
//sendOtp.verify(contactNumber, otpToVerify, callback);

router.post('/', function (req, res) {
    var mobileNumber=req.body.mobileNumber
    var otp=between(10000,99999);

    sendOtp.send(mobileNumber, "AIISMA", otp,function (error, data) {
        console.log(data);
    });
    res.json({
        mobileNo:mobileNumber ,
        otp: otp
    });
});/*
router.post('/', function (req, res) {
    msg91Data=req.body
    var msg91 = require("msg91")("325874ATXdpE5fYME5e913ffeP1", "AIISMA", 1);//(msg91Data.apiKey,msg91Data.sender_id,msg91Data.routeNo)
    var mobileNo = "+917667264079";//msg91Data.mobileNo
    //var mobileNo = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];
    //var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";
    var otp=between(1000,9999);
    msg91.send(mobileNo, "Your verification code is "+otp+", for Aiisma registeration", function(err, response){
        console.log(err);
        console.log(response);
    });
    res.json({
        mobileNo:"7667264079" ,
        otp: otp
    });
});*/
module.exports = router;