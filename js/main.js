import {
  addPlayClickEventListener,
  addProgressChangeEventListener,
  addStopClickEventListener,
  addVideoClickEventListener,
  addVideoPauseEventListener,
  addVideoPlayEventListener,
  addVideoTimeUpdateEventListener
} from './event-listeners.js';

function main() {
  addProgressChangeEventListener();

  addPlayClickEventListener();
  addStopClickEventListener();

  addVideoPlayEventListener();
  addVideoPauseEventListener();
  addVideoClickEventListener();
  addVideoTimeUpdateEventListener();
}

main();
