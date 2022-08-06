// Import Dependencies
const express = require(`express`)
const bodyParser = require(`body-parser`)

// Declaring the application
const application = express()

// Specify the ports to run the app
const PORT = process.env.PORT || 8888
const HOST = '0.0.0.0'

// initialize body parser to receive requests
application.use(bodyParser.urlencoded({
    extended: false
}))

// Define our endpoints and routes
application.get(`/`, (req, res, next) =>(
    res.type(`txt`),
    res.send(`One NACOSS!!! I love nacoss`)
))

// membership service
application.post(`/`, (req, res, next) => {
    let slogan = 'ONE NACOSS!!!'
    let sessionId = req.body.sessionId
    let serviceCode = req.body.serviceCode
    let phoneNumber = req.body.phoneNumber
    let text = req.body.text
    let response = ''

    if (text === ''){
        response = `CON What would you like to do? \n1. Check my phone number \n2. Pay Dues \n3. Check Status`

    } else if (text === '1'){
        response = `END Your phone number is: `.concat(phoneNumber)
    } else if (text === '2') {
        response = `CON School is on strike - no need to pay dues`
    } else if (text === '3'){
        response = `END Your school is doing well`.concat(slogan)
    }
    else {
        response = `END Please try again!`.concat(slogan)
    }
    res.type(`txt`)
    res.send(response)
})  

// tell the application to listen ton the defined port
application.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
    // console.log("server has started on port: ".concat(PORT))
})