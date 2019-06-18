const express = require('express')
const router = express.Router()
const crypto = require('crypto')

router.post('', (req, res) => {
  console.log('depthmap computation post', req.body)
  setTimeout(() => {
    res.status(202).json({
      status_polling_url: `/v0/depth-map-computation/${crypto.randomBytes(8).toString('hex')}`
    })
  }, 1 * 1000)
})

let counter = 0

const getResults = (id) => ({
  image_service_base_url: 'http://localhost:4200/chuwawa',
  depth_map_name: id,
  depth_map_neuroglancer_url: `precomputed://chuwawa/${id}`
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  counter += 1
  const finished = counter % 5 === 0
  const results = finished
    ? getResults(`${id}_${counter}`)
    : {}
  res.status(200).json({
    finished,
    message: `hello world ${counter}`,
    results
  })
})

module.exports = router