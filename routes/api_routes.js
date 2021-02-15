const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/images', function (req, res) {
  db.Image.find({}).then(function (dbImages) {
    res.json(dbImages)
  })
})
module.exports = router
