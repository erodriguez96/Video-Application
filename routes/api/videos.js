const express = require('express');
const router = express.Router();
const VideoRepository = require('../../repositories/VideoRepository').VideoRepository;
const videoRepository = new VideoRepository();

router.get('/', (request, response, next) => {
  videoRepository.findAll((error, rows) => {
    response.json(rows);
  })
});

module.exports = router;
