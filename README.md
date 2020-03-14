### 2020-03-14 수정사항

퍼블리시 후에 행방불명되는 md 파일들 때문에, 로컬이 아닌 suvin-cosmetic 깃허브 레포지토리 주소를 이용해서 raw 파일로 fetch 시키니 성공함 (notice 업데이트 하려면 퍼블리시 하기전에 항상 깃허브 푸시 해줘야됨)

마크다운 파일 로컬에서 이름까지는 가져올 수 있어서 이 이름이용해서 깃허브 suvin-cosmetic 레포지토리의 markdown을 raw 파일로 가져와서 활용함 (깃허브 푸시를 하고 디플로이 해야 마크다운 파일 업데이트 가능)

raw 마크다운 주소 생성 변수는 따로 파일 생성함

마크다운 내용 출력해주는 MainTextFrame.js 새로 생성해서 Notice에서 링크 클릭할때, 중첩라우팅으로 Notice 서브 페이지를 만들어서 마크다운 내용 출력함

Notice 게시판 틀 생성

front matter에 writer와 disqus 입력할수 있도록함

notice에 들어갈 마크다운 콘텐츠들 추가

---

### 2020-03-13 수정사항

undefined 비동기 문제해결 (강제로딩으로)

posts 폴더 전체를 임포트 시켜서 마크다운에 yml 헤더 형식 (front matter) 추가하고

함수 만들어서 date랑 title과 mainText 구분해서 객체리터럴로 저장

중첩 라우트 이용해서 마크다운 개수만큼 추가 주소 생성되도록함

localhost에서는 md파일이 잘 호출되는데 build 시켜서 github pages에 퍼블리시 하면 파일 이름은 얻었는데 가져올수 없다고 에러뜸.. (해결불가.. 아무리 찾아봐도 원인을 모르겠음 CSP는 아닌듯)

---

### 2020-03-12 수정사항

전체적으로 코드 정리함

notice에 마크다운 기능추가

---

### 2020-03-11 수정사항

inquiry 페이지의 disqus의 identifier 부여해서 다른곳과 댓글 분리함

header에 드롭다운 css 추가 및 디자인 수정

header 메뉴들 패딩범위 넓혀서 클릭할수 있는 크기 늘리고, lg 이상에서는 드롭다운 메뉴들 가로크기 일정하게 변경함

z index 이용해서 커라젤이 드롭다운 메뉴 가린거 수정

헤더의 백그라운드 이미지 커라젤이랑 똑같이, 가로 크기 늘리면 점점 커지고 xl 이상되면 높이 고정, 2000px 이상되면 contain으로 수정

header 모바일용에서 서브메뉴들은 md부터 보이도록 했고, 메뉴들이 inline 처리되던거 block 처럼 처리되도록 변경

header 네비게이션 메뉴 테마에 맞게 디자인 수정

유지보수 위해서 SideNav.js를 포함하는 InnerPageFrame.js 컴포넌트를 만들었음. (사이드 네이게이션과 기본 그리드 생성해줌)

대규모의 폴더 및 파일정리

---

### 2020-03-10 수정사항

inquiry 페이지에 disqus 추가하고 페이지 디자인에 맞게 레이아웃 수정

---

### 2020-03-09 수정사항

헤더 페이지에 react-router-dom의 useLocation 을 이용하여 홈화면에서는 헤더의 배경 이미지가 뜨지 않도록함

information-company-motto 페이지에서 배경화면 cover에 오른쪽으로 고정시켜서 창 줄여도 오른쪽 끝 이미지부터 보이게함, 높이 260px로 고정후, 창 크기에 따라 리스트의 패딩값 수정

The field of R&D 에서 lg부터 그리드 가로정렬하게 바꿈

R&D 페이지 사진 수정 및 레이아웃 재조정

competence의 certificate 들 1/4 크기로 리사이징함

global network에 세계지도 추가. 옆 박스에는 MDBMask 대각선 패턴 사용.

global network-Main Business Partners 에 각 국가 박스 수동으로 제작함.

---

### 2020-03-08 수정사항

커라젤 모바일, pc 버전 두개 이미지 따로 있던거 없애버리고, 한 이미지에 cover가지고 한번에 했고, 한번에 vw 이용해서 일정하게 창크기 작으면 잘라주고, 창크기 늘리면 이미지 확대되다가 이미지 원본 높이까지 되면 높이 고정시키고 너비만 늘어나게 했음.

또한 커라젤 부분 가로가 2000px 이상이면, 양옆이 바둑판 배열로 반복되게 했음

header.js 밑에 기다란 고정 이미지 넣었고, 커라젤처럼 2000px 넘어갈시 바둑판 배열시킴, 이거는 창크기 2000px 이하면 축소안되게 했음

company.js에서 회사 연혁 추가, ceo 인사말 추가(영,한)

Competence.js에서 border 라인이 옆에 튀어나온거 해결

각종 사진들 교체

company.js 페이지 css 배경 박스의 오작동 및 글 단락 디자인 수정


---


### 2020-03-07 수정사항

information page added 부터

---

# toDos



- [ ] 폰트 바꾸기

- [ ] 드롭다운 메뉴 만들기

- [ ] 모바일에서 작은 폰에서 사이드메뉴바가 글씨 오버플로우 해결하기

- [ ] xl일때 창 폭늘리고, 사이드메뉴 가로길이 조금 줄이기

- [ ] 모바일에서 살짝이라도 확대시 company의 첫번째 요소 css 박스 틀어짐..

- [ ] footer 에 소셜버튼 넣기

- [ ] 메인페이지에 youtube 삽입

- [ ] company의 Management Motto 에 그립삽입하고 모바일버전에서는 리스트의 좌측패딩값 없애고 사진 배경으로 해놓고 흰색 마스크 씌우기

- [ ] company에 ceo 인사말 하단부분에 "대표 김덕훈" 자필 png 파일로 받아서 넣기

- [ ] header에 수빈로고 집어넣기

- [ ] 메인페이지를 제외한 header에 길쭉한 모델사진 넣기

- [ ] 모바일에서 메뉴열고서 서브메뉴 클릭했으면 햄버거 메뉴 닫히게 하기

- [ ] carasel 모바일에서는 더 큰걸로 넣기

- [ ] disqus 삽입

- [ ] page not found 넣기

- [ ] 증명서들 해상도 낮추기.. 로딩이 느림
- [ ] 404 페이지 만들고 적용
- [ ] 백그라운드 이미지랑 그냥 이미지 중첩되있는데 bg만 남겨놓기

- 홈화면에 제품 사진 courasel 시키기
- 헤더에 그라데이션 넣거나 말거나
- 회사연혁에 백그라운드 하나 넣기
- 이미지 리사이징 하기
- The field of R&D에 표하나 추가
- 상단 헤더 백그라운드 md 이하일때 줄어들게 하기

- global network 이미지를 한국에서 해외로 연결되는 사진으로 바꾸기

- notice 페이지는 마크다운 사용해서 간편하게 쓸수있게하기

- 디스커스 댓글 개수 10개 초과시 다음페이지로 보내기

- 디스커스 페이지별로 댓글 창 나누기

- 로딩페이지 공용으로 따로 만들기

- 커스텀 404 페이지

- 내 깃허브 레포지토리에서 md파일 링크로 직접 가져와야될듯..

- 커라젤 양옆 화살표 누르는거 때문에 customer의 드롭다운 메뉴가 안열리는 경우가 있어서 이거 수정해야됨