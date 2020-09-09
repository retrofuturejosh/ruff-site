const linkMap = {
    strangers: {
        spotify: "http://spotify.com",
        apple: "applemusic.com",
        tidal: 'tidal.com',
        google: 'google.com',
        amazon: 'amazon.com'
    }
}

function linkMapper(song) {
    return linkMap[song];
}

export default linkMapper;