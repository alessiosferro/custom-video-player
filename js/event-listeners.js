import DOMElements from './constants/DOM-elements.js';
import toggleVideoStatus from './helpers/toggle-video-status.js';
import togglePlayIcon from './helpers/toggle-play-icon.js';
import updateProgress from './helpers/update-progress.js';
import stopVideo from './helpers/stop-video.js';
import setVideoProgress from './helpers/set-video-progress.js';

const { VIDEO, PLAY, STOP, PROGRESS } = DOMElements;

export const addVideoClickEventListener = () =>
  VIDEO.addEventListener('click', toggleVideoStatus);

export const addVideoPauseEventListener = () =>
  VIDEO.addEventListener('pause', togglePlayIcon);

export const addVideoPlayEventListener = () =>
  VIDEO.addEventListener('play', togglePlayIcon);

export const addVideoTimeUpdateEventListener = () =>
  VIDEO.addEventListener('timeupdate', updateProgress);

export const addPlayClickEventListener = () =>
  PLAY.addEventListener('click', toggleVideoStatus);

export const addStopClickEventListener = () =>
  STOP.addEventListener('click', stopVideo);

export const addProgressChangeEventListener = () => {
  PROGRESS.addEventListener('change', setVideoProgress);
};
