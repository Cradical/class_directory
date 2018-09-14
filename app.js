const express = require('express')
const app = express()
const port = process.env.PORT || 8000
// const queries = require('.queries')
const cors = require('cors')

app.use(cors)

app.listen(port, (Request, Response) => {
    console.log(`listening on ${port}`)
})