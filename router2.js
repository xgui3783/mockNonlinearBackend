const router = require('express').Router()
const crypto = require('crypto')

router.post('', (req, res) => {
  console.log('alignment computation post', req.body)
  setTimeout(() => {
    res.status(202).json({
      status_polling_url: `/v0/alignment-computation/${crypto.randomBytes(8).toString('hex')}`
    })
  })
})

const getResults = (id) => ({
  image_service_base_url: 'http://localhost:4200/chuwawa',
  transformed_image_name: id,
  transformed_image_neuroglancer_url: `precomputed://chuwawa/${id}`
})

let counter = 0
router.get('/:id', (req, res) => {
  const { id } = req.params
  counter += 1
  const finished = counter % 5 === 0
  const results = getResults(`${id}_${counter}`)

  res.status(200).json({
    finished,
    message: `hello world ${counter}`,
    results
  })
})

module.exports = router