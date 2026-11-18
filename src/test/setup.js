import * as jestDomMatchers from '@testing-library/jest-dom/matchers';
import { installResizeObserverMock, setViewportWidth } from './resizeObserver';

// globals: true 환경에서 테스트가 사용하는 전역 expect에 jest-dom 매처를 등록한다.
// (vitest에서 import한 expect와 전역 expect는 서로 다른 객체다)
globalThis.expect.extend(jestDomMatchers.default ?? jestDomMatchers);
installResizeObserverMock();

beforeEach(() => {
  setViewportWidth(1000);
});
