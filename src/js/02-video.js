import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// -----------------СТАЛО-----------------

let timeStopVideo = localStorage.getItem('videoplayer-current-time');
let timeContiniuVideo = timeStopVideo ? Number(timeStopVideo) : 0.01;

player.setCurrentTime(timeContiniuVideo);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

// -----------------БУЛО-----------------

// let timeStartVideo = Number(localStorage.getItem('videoplayer-current-time'));

// if (timeStartVideo) {
//   player
//     .setCurrentTime(timeStartVideo)
//     .then(function (seconds) {
//       console.log(`Відео відтворюється з - ${Math.trunc(seconds)} секунди`);
//     })
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           break;
//         default:
//           break;
//       }
//     });
// }

// player.on(
//   'timeupdate',
//   throttle(function () {
//     currentPlaybackTime();
//   }, 1000)
// );

// function currentPlaybackTime() {
//   player
//     .getCurrentTime()
//     .then(function (seconds) {
//       localStorage.setItem('videoplayer-current-time', seconds);
//     })
//     .catch(function (error) {
//       console.log('Что то пошло не так');
//     });
// }
