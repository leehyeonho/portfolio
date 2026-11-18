# portfolio

React로 만든 개인 포트폴리오 사이트입니다.
https://leehyeonho.github.io/portfolio/

## 기술 스택

- React 17, [Vite](https://vite.dev/)
- [react-scroll](https://github.com/fisshy/react-scroll) (내비게이션 스크롤)
- Font Awesome 아이콘 (SVG, 사용하는 아이콘만 번들)
- 테스트: [Vitest](https://vitest.dev/), Testing Library
- 린트: ESLint 9 (react, react-hooks)

## 시작하기

Node.js `^20.19.0` 또는 `>=22.12.0`이 필요합니다.

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173/portfolio/)
npm run lint      # ESLint
npm test          # 테스트 1회 실행
npm run test:watch
npm run build     # dist/ 에 프로덕션 빌드
npm run preview   # 빌드 결과 미리보기
```

## 콘텐츠 수정

화면에 표시되는 내용은 컴포넌트가 아니라 [`src/data/`](src/data) 에 있습니다.

| 파일 | 내용 |
|---|---|
| `work.js` | 경력 카드 |
| `projects.js` | 개인 프로젝트 카드 |
| `skills.js` | 기술 스택 아이콘 |
| `certificates.js` | 자격증 이미지 |
| `profile.js` | 이름, 연락처, 내비게이션 항목 |

배열에 객체를 추가하면 카드가 자동으로 늘어납니다.
자격증 이미지는 가로 800px 정도의 WebP로 `src/assets/images/Certificates/`에 추가하세요.

## 구조

```
src/
├── components/   화면 컴포넌트 (Carousel: 경력/프로젝트/자격증 공용 캐러셀)
├── data/         표시할 콘텐츠
├── assets/       CSS, 이미지
└── test/         테스트 설정과 유틸
```

## 배포

`master` 브랜치에 push하면 GitHub Actions([deploy.yml](.github/workflows/deploy.yml))가
린트, 테스트, 빌드를 실행한 뒤 `dist/`를 `gh-pages` 브랜치에 배포합니다.
Pull Request에서는 린트, 테스트, 빌드만 실행하고 배포하지 않습니다.

> GitHub 저장소 설정의 **Pages → Source**가 `Deploy from a branch`, 브랜치 `gh-pages`(/root)로 되어 있어야 합니다.
