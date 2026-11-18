export const WORKS = [
  {
    title: '연구실 홈페이지 제작 및 유지보수',
    url: 'http://genesys.chungbuk.ac.kr',
    urlLabel: 'http://genesys.chungbuk.ac.kr',
    tags: ['nodejs', 'centos7', 'mariadb'],
    details: [
      'Express + EJS로 연구실 소개 사이트 구축, 현재도 운영 중',
      '구성원·교수·논문·연구·메인 슬라이드를 직접 수정하는 관리자 전용 페이지 개발',
      '이미지 업로드(multer), 세션 로그인(Passport, MySQL 세션 저장), 학교 측 서버 호스팅',
    ],
    company: '충북대학교 그린엔진 및 에너지 시스템 연구실',
    period: '2020.04.08~2021.02.01',
  },
  {
    title: '회사 홈페이지 제작 및 유지보수',
    url: 'http://customlab.site',
    urlLabel: 'http://customlab.site',
    tags: ['nodejs', 'mysql'],
    details: [
      '네이버 스마트스토어 상품 목록 스크래핑(cheerio)으로 상품 페이지 자동 갱신',
      '자체 + 카카오/네이버 소셜 로그인, 비밀번호 암호화, 파일 업로드 게시판',
      '네이버 클라우드(CentOS 7)에 pm2로 배포, winston 로그 관리',
    ],
    company: '커스텀랩(customlab)',
    period: '2020.08.25~2021.02.01',
  },
];
