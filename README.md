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

- company의 Management Motto 에 그립삽입하고 모바일버전에서는 리스트의 좌측패딩값 없애고 사진 배경으로 해놓고 흰색 마스크 씌우기
- 홈화면에 제품 사진 courasel 시키기
- global network 이미지를 한국에서 해외로 연결되는 사진으로 바꾸기
- Product 페이지도 Notice 페이지와 동일하되 front matter 에 가격만 넣어야지
- notice페이지에서 공지는 yml 옵션으로 따로 빼기
- 위챗 정보 추가 소셜버튼이나 아이디
- 각 컴포넌트에 key 할당
- product 페이지에 구매링크 올리기
- product 페이지 xl에서 사진 비율 안맞는거 고치기
- 모바일 페이지에서 product에 이미지를 너비 기준으로 높이 정하기
- iframe 모바일 자동재생 설정하기
- iframe 임시로 두개 사용한거 하나로 줄이기
- 깃허브 자체 페이지 커스텀 404 로 바꾸기
- 일반 사용자도 사진 업로드 가능하도록 변경

---

## Change Log

- [change log](https://github.com/syki66/suvin-cosmetic/blob/master/CHANGELOG.MD)

---

## Requirements

> node v16

## Run

```bash
npm install
```

```bash
npm start
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
