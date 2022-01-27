//Declaration of our song values;

let song;
let playSong;

// Spotify CLiet Credentials
const clientId='bc5f62cb5ac34abe8fcf8e382982de6e';
const clientSecret='';

// Function to get token from Spotify
const getToken = async()=> {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method:'POST',
        headers:{
            'Content-type':'application/x-www-form-urlencoded',
            'Authorization':'Basic'+ btoa(clientId + ':'+ clientSecret)
        },
        body: 'grant_type= client_credentials'
    })
    const data= await response.json();
    return data.access_token;
}