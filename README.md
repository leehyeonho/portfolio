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

- **프로젝트 스크린샷**: `projects.js`(또는 `work.js`)의 항목에 `image`를 지정하면 카드 상단에 표시됩니다.
  `import shot from '../assets/images/projects/pofo.webp'`처럼 가져와 `image: shot`으로 넣으세요. (16:9, 가로 800px 안팎의 WebP 권장)
- **이력서 링크**: PDF를 `public/`에 넣고 `profile.js`의 `resume`에 파일명(예: `'resume.pdf'`)을 적으면 이메일/GitHub 옆에 이력서 버튼이 나타납니다.
자격증 이미지는 가로 800px 정도의 WebP로 `src/assets/images/Certificates/`에 추가하세요.

## 폰트

본문 폰트는 롯데마트 드림체이며, 용량을 줄이기 위해 ASCII와 KS X 1001 한글 2,350자만 남긴
서브셋을 `src/assets/fonts/`에 두고 직접 제공합니다. 서브셋에 없는 희귀한 글자는 폴백 폰트로 표시됩니다.
서브셋은 [`scripts/subset-fonts.py`](scripts/subset-fonts.py)로 다시 만들 수 있습니다.

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
