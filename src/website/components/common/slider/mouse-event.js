import document from 'global/document';

function nope() {}

export default class MouseEventHandler {
  constructor({
    vertical = false,
    valueListener = nope,
    toggleMouseOver = nope
  }) {
    this._vertical = vertical;
    this._valueListener = valueListener;
    this._toggleMouseOver = toggleMouseOver;

    this._prev = 0;
  }

  handleMouseDown = (e) => {
    document.addEventListener('mouseup', this._mouseup);
    document.addEventListener('mousemove', this._mousemove);
    this._prev = this._getMousePos(e);
    this._toggleMouseOver();
  }

  _getMousePos(e) {
    return this._vertical ? e.clientY : e.pageX;
  }
  
  _getTouchPosition(e) {
    return this._vertical ? e.touches[0].clientY : e.touches[0].pageX;
  } 

  _getMouseDelta(e) {
    const mouseCoord = this._vertical ? e.movementY : e.movementX;
    const clientCoord = this._getMousePos(e);

    const delta = mouseCoord === 0 ? clientCoord - this._prev : mouseCoord;

    return delta;
  }

  _mouseup = () => {
    document.removeEventListener('mouseup', this._mouseup);
    document.removeEventListener('mousemove', this._mousemove);
    this._toggleMouseOver();
  }

  _mousemove = e => {
    e.preventDefault();
    
    const delta = this._getMouseDelta(e);
    this._prev = this._getMousePos(e);

    this._valueListener(delta);
  }

  handleTouchStart = e => {
    document.addEventListener('touchend', this._touchend);
    document.addEventListener('touchmove', this._touchmove);
    this._prev = this._getTouchPosition(e);
    this._toggleMouseOver();
  }

  _touchend = () => {
    document.removeEventListener('touched', this._touchend);
    document.removeEventListener('touchmove', this._touchmove);
    this._toggleMouseOver();
  }




}