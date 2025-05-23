const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async (req, res) => {
    try {
        const listAll = [
            {
                "idd": 1,
                "name": "Rumble Bobble (Bonus Track 1)",
                "album": "Rock moderno de toda la vida",
                "cover": "https://f4.bcbits.com/img/a4255580162_10.jpg",
                "artist": {
                    "name": "Ehta Gente",
                    "nickname": "Ehta Gente",
                    "nationality": "España"
                },
                "url": "http://192.168.0.13:3001/track-1.mp3"
            },
            {
                "idd": 2,
                "name": "Punkle Bobble (Bonus Track 2)",
                "album": "Rock moderno de toda la vida",
                "cover": "https://f4.bcbits.com/img/a4255580162_10.jpg",
                "artist": {
                    "name": "Ehta Gente",
                    "nickname": "Ehta Gente",
                    "nationality": "España"
                },
                "url": "http://192.168.0.13:3001/track-2.mp3"
            },
            {
                "idd": 3,
                "name": "Raining blood",
                "album": "Reign in Blood",
                "cover": "https://www.metal-hammer.de/wp-content/uploads/2018/12/24/12/slayer_reign-in-blood_binary_378349.jpg",
                "artist": {
                    "name": "Slayer",
                    "nickname": "Slayer",
                    "nationality": "US"
                },
                "url": "http://192.168.0.13:3001/track-3.mp3"
            },
            {
                "idd": 4,
                "name": "Run run run",
                "album": "The Velvet Underground & Nico",
                "cover": "https://i.discogs.com/_2r7jLRIauM1RcHXFozdezOYAVLJXzwL3adwmTvqe9w/rs:fit/g:sm/q:90/h:165/w:165/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0ODM1/MTAtMTI4NjUzNzc1/Ny5qcGVn.jpeg",
                "artist": {
                    "name": "The Velvet Underground",
                    "nickname": "Velvet",
                    "nationality": "US"
                },
                "url": "http://192.168.0.13:3001/track-4.mp3"
            },
            {
                "idd": 5,
                "name": "Jeszcze Raz",
                "album": "s.XXI",
                "cover": "https://lastfm.freetls.fastly.net/i/u/770x0/9bdd13ea53434b3da4d1149104fbe672.jpg#9bdd13ea53434b3da4d1149104fbe672",
                "artist": {
                    "name": "Belgrado",
                    "nickname": "Belgrado",
                    "nationality": "España"
                },
                "url": "http://192.168.0.13:3001/track-5.mp3"
            },
            {
                "idd": 6,
                "name": "T.N.T.",
                "album": "T.N.T. (Australia only)",
                "cover": "https://m.media-amazon.com/images/I/3113WvnFR5L._AC_.jpg",
                "artist": {
                    "name": "AC/DC",
                    "nickname": "ACDC",
                    "nationality": "Australian"
                },
                "url": "http://192.168.0.13:3001/track-6.mp3"
            },
            {
                "idd": 7,
                "name": "Dark Entries",
                "album": "In the Flat Field",
                "cover": "https://www.lafeltrinelli.it/images/5014436130021_0_200_0_75.jpg",
                "artist": {
                    "name": "Bahuaus",
                    "nickname": "Bahuaus",
                    "nationality": "UK"
                },
                "url": "http://192.168.0.13:3001/track-7.mp3"
            },
            {
                "idd": 8,
                "name": "Sátanico Plan (Volumén Brutal)",
                "album": "Volumén Brutal",
                "cover": "https://www.megadisc.pl/img/towary/4/2018_07/BARON-ROJO-Volumen-Brutal-UK-Hear-No-Evil-1.jpg",
                "artist": {
                    "name": "Barón Rojo",
                    "nickname": "Baron Rojo",
                    "nationality": "España"
                },
                "url": "http://192.168.0.13:3001/track-8.mp3"
            },
            {
                "idd": 9,
                "name": "Highway to Hell",
                "album": "Highway to Hell",
                "cover": "https://tudosobreprodutos.com.br/min/cd-acdc-highway-to-hell.jpg",
                "artist": {
                    "name": "AC/DC",
                    "nickname": "ACDC",
                    "nationality": "Australian"
                },
                "url": "http://192.168.0.13:3001/track-9.mp3"
            }
        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }