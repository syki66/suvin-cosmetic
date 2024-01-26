# suvin-cosmetic

수빈코스메틱 공식 홈페이지 **[(링크)](https://suvincos.com/)**

|                                                      PC                                                      |                                                      모바일                                                      |
| :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![pc](https://user-images.githubusercontent.com/59393359/148419257-fa796517-301a-43f0-9f35-073a6a6c8091.png) | ![mobile](https://user-images.githubusercontent.com/59393359/148786314-98bc0511-e416-4a84-aa5e-76519fccaeaa.png) |

---

## Feature

- 회사 정보 제공
- 가로 사이즈에 따라 레이아웃 변경 (576px, 768px, 992px, 1200px)

---

## Caution

로컬서버에서 작업해도 마크다운 파일들은 깃허브 레포를 참조함.

---

## Todo List

- 마크다운 파일들 연결 해제하고 \_header 파일 삭제하고 파이어베이스로 게시판 구현하기
- 폰트 바꾸기
- 모바일에서 작은 폰에서 사이드메뉴바가 글씨 오버플로우 해결하기
- xl일때 창 폭늘리고, 사이드메뉴 가로길이 조금 줄이기
- 메인페이지에 youtube 삽입
- company의 Management Motto 에 그립삽입하고 모바일버전에서는 리스트의 좌측패딩값 없애고 사진 배경으로 해놓고 흰색 마스크 씌우기
- 모바일에서 메뉴열고서 서브메뉴 클릭했으면 햄버거 메뉴 닫히게 하기
- carasel 모바일에서는 더 큰걸로 넣기
- 백그라운드 이미지랑 그냥 이미지 중첩되있는데 bg만 남겨놓기
- 홈화면에 제품 사진 courasel 시키기
- 헤더에 그라데이션 넣거나 말거나
- 회사연혁에 백그라운드 이미지 하나 넣기
- The field of R&D에 표하나 추가
- global network 이미지를 한국에서 해외로 연결되는 사진으로 바꾸기
- 디스커스 댓글 개수 10개 초과시 다음페이지로 보내기
- 카카오톡 채널파기
- Product 페이지도 Notice 페이지와 동일하되 front matter 에 가격만 넣어야지
- notice페이지에서 공지는 yml 옵션으로 따로 빼기
- 위챗 정보 추가 소셜버튼이나 아이디
- 각 컴포넌트에 key 모두 할당하기 (안하면 속도 느리다함)
- yml에 가격 따로 빼기
- 프록시로 사이트 속도 올릴수 있는지 알아보기
- product 페이지에 구매링크 올리기
- 헤더메뉴 글씨 등 조금더 크게하기
- product 페이지 xl에서 사진 비율 안맞는거 고치기
- notice product 링크에서 마우스 hover 할때 색변화
- 모바일 페이지에서 product에 이미지를 너비 기준으로 높이 정하기
- iframe 모바일 자동재생 설정하기
- iframe 임시로 두개 사용한거 하나로 줄이기
- 깃허브 자체 페이지 커스텀 404 로 바꾸기

---

## Change Log

- [change log](https://github.com/syki66/suvin-cosmetic/blob/master/CHANGELOG.MD)

---

## Requirements

node v16

## Run

> npm install

> npm start

npm 오류 시 아래 명령어 실행

export NODE_OPTIONS=--openssl-legacy-provider

---

## Build

<!-- `.env` 파일 생성 후 `REACT_APP_NAVER_CLIENT_ID=클라이언트아이디` 적어주기 -->

<!-- `npm run deploy` -->

npm run build -> build/static/media 파일에 수동으로 깃허브의 markdown/ 넣고, nelify에 build파일 수동 배포
