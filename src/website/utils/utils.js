import window from 'global/window';


export function isChrome() {
  return window.chrome && window.chrome.webstore;
}