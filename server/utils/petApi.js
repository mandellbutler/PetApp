const fetch = require("node-fetch");
module.exports = {
    getPet: async function ({ req, res }) {
        const data = await getPets();
        return res.send(JSON.stringify(data));
    }
}

// Fetch api info from petfinder
const getPets = async () => {
    const url = "https://api.petfinder.com/v2/animals?location=ny";
    let token = process.env.REACT_APP_APITOKEN;
    // console.log("Access Tolkein: " + token);
    let apiData = await getApi(url, token);

    // if token doesn't work, get new one
    if (apiData.status !== 200) {
        token = await getToken();
        apiData = await getApi(url, token)
    }

    // console.log("PETS API ", apiData)
    return apiData;
}

const getApi = async (url, token) => {
    const data = await fetch(url, {
      // add token
      headers: {
          'Authorization': 'Bearer '+token, 
      }
    })
    const response = await data.json();
    // console.log(response);
    return response;
}

const getToken = async () => {
    const cred = JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_APIKEY,
      client_secret: process.env.REACT_APP_APISECRET
    })
    // Get token from petfinder api
    const data = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        headers: {
            'Content-Type': 'application/json'
        },
        body: cred,
        method: "POST"
    })
    const response = await data.json();
    // console.log(response);
    return response.access_token;
}