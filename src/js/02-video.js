import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_PROGRES_KEY = "video-current-time";

const iframe = document.querySelector(`#vimeo-player`);
const player = new Player(iframe); // ініціалізація плеєра

function onProgres({seconds}) { // функція onProgres, яка в параметр приймає оновленний час перегляду та записує в локал сторадж
    localStorage.setItem(VIDEO_PROGRES_KEY, seconds);
    }

player.on('timeupdate', throttle(onProgres, 1000)); // прослуховування події timeupdate та виклик колбек функціі onProgres

const storedTime = localStorage.getItem(VIDEO_PROGRES_KEY);

if(storedTime) {
player.setCurrentTime(storedTime)};

