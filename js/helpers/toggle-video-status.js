import DOMElements from '../constants/DOM-elements.js';

export default () => {
  const { VIDEO } = DOMElements;

  VIDEO.paused ? VIDEO.play() : VIDEO.pause();
};
