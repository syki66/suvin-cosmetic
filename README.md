# suvin-cosmetic

수빈 코스메틱의 소개 및 홍보용 웹사이트 **[(링크)](https://suvincos.com/)**

|                                                      PC                                                      |                                                      모바일                                                      |
| :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![pc](https://user-images.githubusercontent.com/59393359/148419257-fa796517-301a-43f0-9f35-073a6a6c8091.png) | ![mobile](https://user-images.githubusercontent.com/59393359/148786314-98bc0511-e416-4a84-aa5e-76519fccaeaa.png) |

## Built With

- React
- MDB (Material Design for Bootstrap 4)
- Firebase
- react-quill

## Feature

- 4단계 반응형 디자인 적용 (576, 768, 992, 1200px)
- 회사 소개 페이지 및 헤더, 푸터, 캐러셀, 지도 api, 도형, 애니메이션, 다양한 레이아웃 적용
- 인증 페이지 (회원가입, 로그인, 로그아웃, 암호 초기화 페이지, Firebase Auth 및 소셜 로그인)
- 게시판, 상품 조회 페이지, 페이지네이션 구현 (Firestore를 이용한 CRUD)
- [react-quill](https://github.com/zenoamaro/react-quill) 위지윅 에디터 적용 (이미지는 Cloud Storage에 연동)
- 각 게시글에 실시간 댓글 기능 (Firestore onSnapshot 적용)
- 관리자용 기능 (상품 및 공지 작성 권한 부여, 글 비공개 여부, 날짜, 작성자 수정, 모든 게시글의 수정 삭제, 모든 댓글의 삭제)

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
