const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (Request, Response) => {
    queries.listAll().then(students => Response.json({students}))
})

app.get('/:id', (Request, Response) => {
    queries.getById(Request.params.id).then(student => Response.json({student}))
})

app.post('/', (Request, Response) => {
    console.log(Request.body)
    queries.create(Request.body).then(status => Response.json({status}))
})

// app.put('/', (Request, Response) => {

// })

app.delete('/', (Request, Response) => {
    queries.delete(Request.params.id).then(status => Response.json({status}))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})