import DOMElements from '../constants/DOM-elements.js';

const PLAY_ICON_HTML = '<i class="fa fa-play fa-2x"></i>';
const PAUSE_ICON_HTML = '<i class="fa fa-pause fa-2x"></i>';

export default () => {
  const { PLAY, VIDEO } = DOMElements;

  PLAY.innerHTML = VIDEO.paused ? PLAY_ICON_HTML : PAUSE_ICON_HTML;
};
