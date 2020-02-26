import DOMElements from '../constants/DOM-elements.js';

export default () => {
  updateProgressUI();
  updateTimestampUI();
};

function updateProgressUI() {
  const { PROGRESS, VIDEO } = DOMElements;
  PROGRESS.value = (VIDEO.currentTime / VIDEO.duration) * 100;
}

function updateTimestampUI() {
  const { TIMESTAMP } = DOMElements;
  TIMESTAMP.innerHTML = `${getMinutes()}:${getSeconds()}`;
}

function getMinutes() {
  const CURRENT_TIME_IN_MINS = getCurrentTimeInMinutes();
  return CURRENT_TIME_IN_MINS < 10
    ? `0${CURRENT_TIME_IN_MINS}`
    : CURRENT_TIME_IN_MINS;
}

function getSeconds() {
  const CURRENT_TIME_IN_SECS = getCurrentTimeInSeconds();
  return CURRENT_TIME_IN_SECS < 10
    ? `0${CURRENT_TIME_IN_SECS}`
    : CURRENT_TIME_IN_SECS;
}

const getCurrentTimeInMinutes = () => Math.floor(video.currentTime / 60);
const getCurrentTimeInSeconds = () => Math.floor(video.currentTime % 60);
