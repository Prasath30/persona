// AIzaSyAQO5Ws_eSTm6j4gHoZw01Km0OoMhoLOpg

// 606882768889-k4l0pmkaugt47vnbh4vh87i278u298lb.apps.googleusercontent.com client id
// client secret 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

//     var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

//    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
import React from 'react'

const Gapi = () => {

    var gapi = window.gapi
    var CLIENTID ="606882768889-k4l0pmkaugt47vnbh4vh87i278u298lb.apps.googleusercontent.com"
    var APIKEY = "AIzaSyAQO5Ws_eSTm6j4gHoZw01Km0OoMhoLOpg"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    const handleClick = (e)=>{
        e.preventDefault();
        gapi.load("client:auth2", ()=>{
            console.log("loaded client")

            gapi.client.init({
                apiKey:APIKEY,
                clientId:CLIENTID,
                discoveryDocs:DISCOVERY_DOCS,
                scope:SCOPES,
            })

            gapi.client.load('calendor',"v3",()=>console.log("!bam"))

            gapi.auth2.getAuthInstance().signIn()

        })
    }

    return (
        <div>
            <button onClick={(e)=>handleClick(e)} >Add event</button>
        </div>
    )
}

export default Gapi
