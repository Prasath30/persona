// Zuzz1mNjQsKWPkmA8H-EFQ
// HlBg9m8mgqWizeVDmdxYh8kTsNEqO2xcCnzZ
// eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3X2tnSnZMS1M2dVVzbERDT001Qm13In0.F9b8Kbz3Cmqs1LAQ4lBjDw6PvoY8ZykS1FFDvbcye_0


import React from 'react'

const zoom = () => {
    const jwt = require('jsonwebtoken');
const rp = require('request-promise');


//Use the ApiKey and APISecret from config.js
const payload = {
    iss: 'Zuzz1mNjQsKWPkmA8H-EFQ',
    exp: ((new Date()).getTime() + 50000)
};
const token = jwt.sign(payload, 'HlBg9m8mgqWizeVDmdxYh8kTsNEqO2xcCnzZ');



  var options = {
    //You can use a different uri if you're making an API call to a different Zoom endpoint.
    uri: "https://api.zoom.us/v2/users/prasathbalasubramani30@gmail.com", 
    qs: {
        status: 'active' 
    },
    auth: {
        'bearer': 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6Ilp1enoxbU5qUXNLV1BrbUE4SC1FRlEiLCJleHAiOjE2NDIwNTQzMjAsImlhdCI6MTY0MjA0ODc3MH0.ILmlDlsNYOUo3SrmbUuIfXDoUO-8iWNwNfxMNYczjCs'
    },
    headers: {
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json'
    },
    json: true //Parse the JSON string in the response
};

//Use request-promise module's .then() method to make request calls.
rp(options)
    .then(function (response) {
      //printing the response on the console
        console.log('User has', response);
        //console.log(typeof response);
        // s
        //Adding html to the page
        // var title1 ='<center><h3>Your token: </h3></center>' 
        // var result1 = title1 + '<code><pre style="background-color:#aef8f9;">' + token + '</pre></code>';
        // var title ='<center><h3>User\'s information:</h3></center>' 
        //Prettify the JSON format using pre tag and JSON.stringify
        // var result = title + '<code><pre style="background-color:#aef8f9;">'+JSON.stringify(resp, null, 2)+ '</pre></code>'
        // res.send(result1 + '<br>' + result);
 
    })
    .catch(function (err) {
        // API call failed...
        console.log('API call failed, reason ', err);
    });
    return (
        <div>
            <button>Helo world</button>
        </div>
    )
}

export default zoom





