# suvin-cosmetic

수빈 코스메틱의 소개 및 홍보 목적의 웹사이트 **[(링크)](https://suvincos.com/)**

<br />

## Screenshots

| 메인화면 (PC) | 메인화면 (mobile) |
| :---: | :---: |
| ![pc](https://github.com/syki66/suvin-cosmetic/assets/59393359/5d28e027-69b8-4238-b75f-eada1e78a684) | ![mobile](https://github.com/syki66/suvin-cosmetic/assets/59393359/9331b73e-8237-42ef-9915-3fcc5482342b) |
| 상품 그리드 뷰 (PC) | 상품 그리드 뷰 (mobile) |
| ![image](https://github.com/syki66/suvin-cosmetic/assets/59393359/e02a51f3-fb81-424d-9006-eed7f6af2ffe) | ![image](https://github.com/syki66/suvin-cosmetic/assets/59393359/254a2534-d560-4c7d-b880-7d5dc98b7be1) |
| 게시판 리스트 (PC) | 게시판 리스트 (mobile) |
| ![image](https://github.com/syki66/suvin-cosmetic/assets/59393359/4c8c8946-b3e1-4ef9-bbaf-753a738549c2) | ![image](https://github.com/syki66/suvin-cosmetic/assets/59393359/113b8f48-e897-4636-a88e-403ab49a3b00) |

|소개페이지1|소개페이지2|
| :---: | :---: |
|![image](https://github.com/syki66/suvin-cosmetic/assets/59393359/4cfb8c5c-ba4f-4d19-bf06-1835b23f4d6b)|![image](https://github.com/syki66/suvin-cosmetic/assets/59393359/bd8da648-51f1-441f-979a-ab61c7c51cc8)|

## Built With

- React
- MDB React UI Kit
- Firebase
- react-quill

## Feature

- 4단계 반응형 디자인 적용 (576, 768, 992, 1200px)
- 메인 화면, 회사 소개, 헤더 및 푸터, 지도, 상품, 공지, 게시판, 인증 페이지 구현
- 썸네일 그리드 뷰, 게시판, 페이지네이션, 실시간 댓글, carousel, 네이버 지도 API, quill 에디터, 이미지 업로드 적용 및 구현
- Firebase Auth 기능 적용 (회원가입, 로그인, 로그아웃, 소셜 로그인, 암호 초기화, 인증 메일, 인증 상태 핸들링)
- Firestore(NoSQL DB)를 통한 게시판 CRUD 구현
- 관리자 및 사용자 권한 분리 (상품 및 공지 작성 권한, 비공개 게시글 열람, 날짜 및 작성자 수정, 모든 게시글 및 댓글의 수정과 삭제)

## Caution

- firebase에 특정 페이지의 데이터만 가져오는 페이지네이션이 불가능해서 현재는 컬렉션의 모든 문서를 get해서 사용
- document의 최대 용량은 최대 1MB라서 게시글의 양은 제한 걸지 않음
- 비공개 게시물은 프론트에서만 막아놓음
- 관리자만이 storage의 read, write 권한을 가짐
- firebase sdk v10 버전을 사용 중 타임아웃 오류가 있어서 v9으로 다운그레이드 진행함
- fcm 설정 initialize하면 오류 발생함
- 로컬 개발환경에서 proccess 관련 오류 발생함

## Requirements

- node v16

최신 노드버전에서 실행하려면 `--openssl-legacy-provider` 옵션 넣기 _(현재는 스크립트에 넣어놓음)_

## Run

```bash
npm install
```

```bash
npm start
```

#### 다른 기기에서 테스트 하려면 아래 명령어 실행 후, `http://아이피주소:포트번호`로 접속하기

```bash
HOST=0.0.0.0 npm start
```

---

## Build

_`package.json`의 `build`에 `CI=false` 추가해야됨 (CI 서버에서 warning을 error로 간주해서 빌드 실패가 발생함)_

#### 수동 배포

```bash
npm run deploy
```

#### 자동 배포

master 브랜치에 merge 또는 push가 발생하면, Github Action을 통해서 자동 배포됨

## Todo List

- carousel을 이용해서 홈화면에 product 리스트 나열 및 순환
- 각 컴포넌트에 key 할당
- 메인 화면 iframe 하나로 줄이기
- 일반 사용자도 사진 업로드 가능하도록 변경
  - 유저에게 사진 업로드 권한을 주기 위해서는 storage 구조를 변경해야됨 (`/username/file/path`)

## Change Log

- [change log](https://github.com/syki66/suvin-cosmetic/blob/master/CHANGELOG.MD)
- commit description에 표기함
