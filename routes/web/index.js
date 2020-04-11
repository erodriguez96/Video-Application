const express = require('express');
const router = express.Router();
const VideoRepository = require('../../repositories/VideoRepository').VideoRepository;
const videoRepository = new VideoRepository();

router.get('/', (request, response, next) => {
  videoRepository.findAll((error, rows) => {
    response.render('index', { videos: rows });
  })
});

module.exports = router;
