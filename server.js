const express = require("express")
const next = require("next")
const bodyParser = require("body-parser")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handleNextRequests = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get("/alive", (req, res) => {
    res.status(200).send("yes")
  })

  server.get("/ready", (req, res) => {
    res.status(200).send("yes")
  })

  server.get("*", (req, res) => {
    handleNextRequests(req, res)
  })

  server.post("/submitComment", (req, res) => {
    console.log(req.body.comment)
    res.sendStatus(200)
  })

  const port = process.env.PORT || 3000
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost: ${port}`)
  })
})
