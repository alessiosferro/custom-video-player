import DOMElements from '../constants/DOM-elements.js';

export default () => {
  const { VIDEO } = DOMElements;
  VIDEO.currentTime = 0;
  VIDEO.pause();
};
