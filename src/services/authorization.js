
export function getInfo(code, secret, clientID) {
    if (!code) {
        redirectToAuthCodeFlow(clientID);
    } else {
        const accessToken = getAccessToken(clientID, secret, code);
        console.log(accessToken);
        let token = JSON.stringify(accessToken);
        console.log(token);
        return fetchProfile(accessToken);
    }
}

async function redirectToAuthCodeFlow(clientId) {
    // TODO: Redirect to Spotify authorization page
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);
    const params = new URLSearchParams();

    localStorage.setItem("verifier", verifier);

    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/blogs");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function getAccessToken(clientId, secret, code) {
    // TODO: Get access token for code
    const verifier = localStorage.getItem("verifier");
    const url = "https://accounts.spotify.com/api/token";
    const params = new URLSearchParams();

    params.append("client_id", clientId);
    params.append("client_secret", secret);
    params.append("grant_type", "client_credentials");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("code_verifier", verifier);

    const payload = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    }

    const result = await fetch(url, payload);

    return await result.get("access_token");
}

export async function getRefreshToken(clientId) {
    // TODO: Get access token for code
    const refreshToken = localStorage.getItem("refresh_token");
    const params = new URLSearchParams();
    const url = "https://accounts.spotify.com/api/token";

    params.append("client_id", clientId);
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);

    const payload = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    }

    const result = await fetch(url, payload);

    return await result.json();
}

async function fetchProfile(token) {
    // TODO: Call Web API
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: {Authorization: `Bearer ${token}`}
    });

    return await result.json();
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return String.fromCharCode.apply(null, [...new Uint8Array(digest)]).toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
// TODO (Make a webpack.config.js file to the project and make experiment.toplevelawait true)
// LINK: https://stackoverflow.com/questions/72474803/error-the-top-level-await-experiment-is-not-enabled-set-experiments-toplevelaw
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

async function fetchWebApi(endpoint, method, body) {
    try {
        const res = await fetch(`/api/${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method,
            body: body ? JSON.stringify(body) : undefined
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error in fetchWebApi:', error);
        throw error;
    }
}

export async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    try {
        let tracks = (await fetchWebApi('v1/me/top/tracks?time_range=short_term&limit=3&offset=0', 'GET'))
        return tracks;
    } catch (e) {
        console.error("Error fetching top tracks:", e);
        return null;
    }
}



// const topTracks = await getTopTracks();
// console.log(
//     topTracks?.map(
//         ({ name, artists }) =>
//             `${name} by ${artists.map(artist => artist.name).join(', ')}`
//     )
// );