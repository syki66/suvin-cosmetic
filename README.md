# suvin-cosmetic

수빈코스메틱 공식 홈페이지 **[(링크)](https://suvincos.com/)**

|                                                      PC                                                      |                                                      모바일                                                      |
| :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![pc](https://user-images.githubusercontent.com/59393359/148419257-fa796517-301a-43f0-9f35-073a6a6c8091.png) | ![mobile](https://user-images.githubusercontent.com/59393359/148786314-98bc0511-e416-4a84-aa5e-76519fccaeaa.png) |

## Feature

- 회사 정보 제공
- 가로 사이즈에 따라 레이아웃 변경 (576px, 768px, 992px, 1200px)

## Caution

- firebase에 특정 페이지의 데이터만 가져오는 페이지네이션이 불가능해서 현재는 컬렉션의 모든 문서를 get해서 사용
- document의 최대 용량은 최대 1MB라서 게시글의 양은 제한 걸지 않음
- 비공개 게시물은 프론트에서만 막아놓음
- 관리자만이 storage의 read, write 권한을 가짐
- firebase sdk v10 버전을 사용 중 타임아웃 오류가 있어서 v9으로 다운그레이드 진행함
- fcm 설정 initialize하면 오류 발생함
- 로컬 개발환경에서 proccess 관련 오류 발생함

## Todo List

- carousel을 이용해서 홈화면에 product 리스트 나열 및 순환
- 각 컴포넌트에 key 할당
- 메인 화면 iframe 하나로 줄이기
- 일반 사용자도 사진 업로드 가능하도록 변경
  - 유저에게 사진 업로드 권한을 주기 위해서는 storage 구조를 변경해야됨 (`/username/file/path`)

## Change Log

- [change log](https://github.com/syki66/suvin-cosmetic/blob/master/CHANGELOG.MD)
- commit description에 표기

## Requirements

> node v16

최신 노드버전에서 실행하려면 `--openssl-legacy-provider` 옵션 넣기 _(현재는 스크립트에 넣어놓음)_

## Run

```bash
npm install
```

```bash
npm start
```

> 다른 기기에서 테스트 하려면 아래 명령어 실행 후, `http://아이피주소:포트번호`로 접속하기

```bash
HOST=0.0.0.0 npm start
```

---

## Build

_`package.json`의 `build`에 `CI=false` 추가해야됨 (CI 서버에서 warning을 error로 간주해서 빌드 실패가 발생함)_

> 수동 배포

```bash
npm run deploy
```

> 자동 배포

master 브랜치에 merge 또는 push가 발생하면, Github Action을 통해서 자동 배포됨
