import Player from '@vimeo/player';

const player = new Player('vimeo-player');
var throttle = require('lodash.throttle');

player.on(
    'timeupdate',
    throttle(({ seconds }) => {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
    }, 1000)
);

const timeStop = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeStop).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


