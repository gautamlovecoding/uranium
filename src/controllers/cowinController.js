let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

let VacByDistId = async function(req, res){
    distId = req.query.district_id
    date = req.query.date
    let options = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${distId}&date=${date}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({msg: result.data})
}


// get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>
let getWeatherData = async function(req, res){
    let places = req.query.q
    // let appId = req.query.appid
    let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${places}&appid=b74969ce7c570871b175aedadd22b46b`
    }
    let result = await axios(options)
    // console.log(result.data)
 // - then change the above to get the temperature only( of London)
    let selectTemp = result.data.main.temp
    console.log(selectTemp);
    res.status(200).send({msg: selectTemp});
}

// - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
// result should look something like this
// [
// {city:"London", temp: 280},
// {city:"Moscow", temp: 290},
// {city:"Bangalore", temp: 301.2},
// .......
// ]

let incTempData = async function(req, res){
    let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];

let cityArr = [];
 for(let i=0; i<cities.length; i++){
     let city = {city: cities[i]}
     let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b74969ce7c570871b175aedadd22b46b`
    }
    let result = await axios(options)
    city.temp = result.data.main.temp
    // console.log (city)
    cityArr.push(city) 
}   
    let compare= (a, b)=>{
        if(a.temp > b.temp) {return 1}
        if(a.temp < b.temp) {return -1}
        return 0;
    }
    cityArr.sort(compare)
    res.status(200).send({msg: cityArr})

}

// 1. Get all the memes at Postman (https://api.imgflip.com/get_memes)

let get_memes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({  status: true,msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// 3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
// template_id <meme_id>
// text0 <text you want as a caption>
// text1 <optional>
// username chewie12345
// password meme@123

// 4. Return a response with a body like this
// "data": {
//         "url": "https://i.imgflip.com/5mvxax.jpg",
//         "page_url": "https://imgflip.com/i/5mvxax"
//     }


const createMemes = async function(req, res){
    let template_id = req.query.memeId
    let textLeft = req.query.textLeft
    let textRight = req.query.textRight
    let username = req.query.name
    let password = req.query.password

    let options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${textLeft}&text1=${textRight}&username=${username}&password=${password}`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({data: data})
}







module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.VacByDistId = VacByDistId
module.exports.getWeatherData = getWeatherData
module.exports.incTempData = incTempData
module.exports.get_memes = get_memes
module.exports.createMemes = createMemes

