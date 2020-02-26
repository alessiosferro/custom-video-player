import DOMElements from '../constants/DOM-elements.js';

export default () => {
  const { VIDEO, PROGRESS } = DOMElements;

  VIDEO.currentTime = (Number.parseInt(PROGRESS.value) * VIDEO.duration) / 100;
};
