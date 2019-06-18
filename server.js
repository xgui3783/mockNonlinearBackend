const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.use('/chunma', require('./routerChunma'))

app.use('/v0/depth-map-computation', require('./router'))

app.use('/v0/alignment-computation', require('./router2'))

app.use((req, res) => {
  res.status(404).send()
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))