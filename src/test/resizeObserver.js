import { act } from '@testing-library/react';

// jsdom에는 레이아웃이 없으므로 ResizeObserver와 clientWidth를 흉내낸다.
const observers = new Set();
let width = 1000;

export function installResizeObserverMock() {
  global.ResizeObserver = class {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {
      observers.add(this);
    }
    unobserve() {}
    disconnect() {
      observers.delete(this);
    }
  };
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    get: () => width,
  });
}

export function setViewportWidth(next) {
  width = next;
  act(() => {
    observers.forEach((observer) => observer.callback());
  });
}
