<img width="100%" src="/public/img/readme/muse_dash_logo.png" href="MuseDash Logo">

# 서비스소개
게임을 좋아하는 사람들이 자유롭게 소통하는 게임커뮤니티 사이트 입니다. 자유게시판을 통해 로그인 없이 자유롭게 글을 작성할 수 있으며, 포인트를 충전하여 중고마켓에서 유저들이 등록한 게임 장비, 굿즈 등을 거래할 수 있습니다.

| 페이지     | 주요기능                                                                                                                                                                                                                                                                   |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 자유게시판 | ・ CRUD</br> ・ Pagenation</br> ・ Search (debounce library 사용)</br> ・ 좋아요 & 싫어요</br> ・ 댓글</br> ・ Youtube 영상, 이미지 업로드 (react-player 사용)</br> ・ Carousel (React-slick 사용)</br> ・ infinite scroll (React Infinite Scroller 사용)</br> ・ 주소 (React-daum-postcode 사용)                  |
|            |                                                                                                                                                                                                                                                                            |
| 중고마켓   | ・ CRUD</br> ・ 주소 (React-daum-postcode 사용)</br> ・ infinite scroll (React Infinite Scroller 사용)</br> ・ Editor (react-quill 사용)</br> ・ 지도 (kakao openApi 사용)</br> ・ 결제 (아임포트 api 사용)</br> ・ 댓글, 대댓글</br> ・ 장바구니</br> ・ 검색 (특정 단어, 날짜)</br> ・ 찜하기</br> ・ HashTag </br> ・ 권한 분기 |
|            |                                                                                                                                                                                                                                                                            |
| Giphy      | ・ 짤방 검색 (Giphy openApi 사용)</br> ・ History (Firebase 사용)                                                                                                                                                                                                               |
|            |                                                                                                                                                                                                                                                                            |
| 로그인     | ・ 로그인</br> ・ AccessToken을 이용한 로그인 유지                                                                                                                                                                                                                              |
| 회원가입   | ・ 회원가입                                                                                                                                                                                                                                                                |
| 렌딩       | ・ Fullpage                                                                                                                                                                                                                                                                |

# 기술 스택
- Next.js
- Apollo Client 
- Graphql
- Emotion & Styled-component
- TypeScript
- ContextApi
- Firebase

# 라이브러리 & Open Api
- Debounce
- lodash
- React-player
- React-slick
- React Infinite Scroller
- React-daum-postcode
- react-quill
- Kakao map api
- 아임포트 api
- Giphy api

# 기능 영상
## Rending page
- Fullpage
<img width="100%" src="/public/img/readme/rending_fullpage.gif" href="자유게시판 리스트 페이지">
</br>

## 자유게시판
-  List page & Detail page (Pagenation, Search, react-player, Carousel)
<img width="100%" src="/public/img/readme/freeboard_list.gif" href="자유게시판 리스트 페이지">
</br>

-  글쓰기 (daum-postcode)
<img width="100%" src="/public/img/readme/freeboard_create_1.gif" href="자유게시판 글쓰기 페이지">
<img width="100%" src="/public/img/readme/freeboard_create_2.gif" href="자유게시판 글쓰기 페이지">
</br>

## 중고마켓
-  찜하기, 날짜 검색, 무한 스크롤
<img width="100%" src="/public/img/readme/market_list_1.gif">
</br>

- 오늘 본 상품, 상품 디테일
<img width="100%" src="/public/img/readme/market_list_2.gif">
</br>

- 상품 등록, HashTag, Editor
<img width="100%" src="/public/img/readme/market_create_1.gif">
<br>

- 주소, 지도, 이미지 등록
<img width="100%" src="/public/img/readme/market_create_2.gif">
<br>

- 삼품 수정, 삭제
<img width="100%" src="/public/img/readme/market_modify_delete.gif">
<br>

- 댓글 CRUD, 지도
<img width="100%" src="/public/img/readme/market_answer_map.gif">
<br>

- 포인트 충전
<img width="100%" src="/public/img/readme/market_charge_1.gif">
<br>

- 상품 구매
<img width="100%" src="/public/img/readme/market_charge_2.gif">
<br>

- 권한분기, 로그인
<img width="100%" src="/public/img/readme/권한분기.gif">
<br>

## 회원 가입
<img width="100%" src="/public/img/readme/회원가입.gif">
<br>

## Giphy
- 움짤 검색하기
<img width="100%" src="/public/img/readme/giphy.gif">
<br>

- history
<img width="100%" src="/public/img/readme/giphy_history.gif">
<br>