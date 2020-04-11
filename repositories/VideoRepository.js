const Database = require('./Database').Database;

function VideoRepository() {

    this.videos = [
        {
            name: 'video1.mp3',
            url: 'url1'
        },
        {
            name: 'video2.mp3',
            url: 'url2'
        },
        {
            name: 'video3.mp3',
            url: 'url3'
        },
        {
            name: 'video4.mp3',
            url: 'url4'
        },
        {
            name: 'video5.mp3',
            url: 'url5'
        },
        {
            name: 'video6.mp3',
            url: 'url6'
        }
    ];

    this.findAll = (callback) => {
        Database.getConnection().all('SELECT name, url FROM video', [], callback);
    }
};

exports.VideoRepository = VideoRepository;