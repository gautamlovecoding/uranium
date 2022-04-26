const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/VacByDistId", CowinController.VacByDistId)

router.get("/weather/getWeatherData", CowinController.getWeatherData)

router.get("/weather/sortedCities", CowinController.incTempData)

router.get("/memes/get_memes", CowinController.get_memes)

router.get("/memes/createMemes", CowinController.createMemes)




module.exports = router;