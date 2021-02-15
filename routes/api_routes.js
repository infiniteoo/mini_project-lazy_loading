const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/images', function (req, res) {
  db.Image.find({}).then(function (dbImages) {
    res.json(dbImages)
  })
})

router.put('/images/:id', function (req, res) {
  db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function (dbImage) {
    res.json(dbImage)
  })
})
module.exports = router
