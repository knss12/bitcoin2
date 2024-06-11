# 가상화폐 홈페이지 - 데이터 가져와서 보여주기

## 1. 개요

- 프로젝트 이름 : Bitcoin Homepage
- 개발 기간 : 2024.05.04 ~ 2024.05.11
- 개발 환경 : React
- 작업 관리 : Git
- #### 설치 라이브러리

        npm install react-bitcoin2
        npm install react-router-dom@6
        npm install react-bootstrap

- #### 파일 구성

  ```
    📦 src
    ┣ 📂 routes
    ┃ ┗ 📜Account.js
    ┃ ┗ 📜Coininfo.js
    ┃ ┗ 📜Home.js
    ┃ ┗ 📜Login.js
    ┃ ┗ 📜Notfound.js
    ┃ ┗ 📜Question.js
    ┣ 📜App.js
    ┣ 📜App.css
    ┣ 📜index.css
    ┣ 📜index.js
    ┣ 📜logo.svg
    ┣ 📜reportWebVitals.js
    ┣ 📜data.js
    ┗ 📜setupTests.js
  ```

  ## 2. 프로젝트 설명

  - #### React.js와 가상화폐 데이터를 활용하여 제작한 비트코인 홈페이지 입니다.

    - 요즘 이슈인 가상화폐 데이터를 일부만 가져와서 React.js를 이용해 홈페이지를 제작하였습니다.

  - #### 현재 사용되는 가상화폐 데이터를 사용하였습니다.
    - 현재 사용되는 가상화폐 데이터중 일부만 가져와서 data.js를 만들고 난 뒤
      해당 파일에서 props를 이용해 데이터를 가져와서 홈페이지에 띄웁니다.

  ## 3. 주요 기능

  ## 메인 화면

  - #### 가상화폐 데이터 나열하기.

  <div align="center">
      <img src = "https://github.com/knss12/bitcoin2/assets/121605903/128570bd-4cdc-4a2c-9969-ca151cfba9f6"> 
  </div>

  - data.js에 저장된 데이터를 가져와서 나열해준다.

  - #### Navbar에 Home, Q&A, Login 링크 나열

  <div align="center">
      <img src = "https://github.com/knss12/bitcoin2/assets/121605903/75b31890-a562-4e42-b846-81008cf877ec"> 
  </div>

  - Link, useNavigate와 onClick을 사용하여 Q&A 클릭시 해당 화면으로 이동한다.
  - Link, useNavigate와 onClick을 사용하여 Login 클릭시 해당 화면으로 이동한다.

  ## Coininfo 화면

  - #### 가상화폐 info 관련

  <div align="center">
      <img src = "https://github.com/knss12/bitcoin2/assets/121605903/1ef4d0d5-f978-4f91-9693-d1f5d8a94b52"> 
  </div>

  - useParams를 이용해 id를 가져온다.
  - 해당화면에는 각 id별 데이터를 가져와서 화면에 보여준다.
  - data는 props를 이용해 가져온다.


  <div align="center>
          <img src="https://github.com/knss12/bitcoin2/assets/121605903/fbc013c3-3505-46ee-8bea-33c1dfb45faa">
  </div>

  - movinginfo 함수를 만들어서 각 아이템을 클릭 시 아이템의 rank를 확인 후 일치하면 "/detail/rank의 id"로 이동하게 해준다.
 
  
  ## Q&A 화면

  - #### 글올리기 및 삭제 기능

  <div align="center">
      <img src = "https://github.com/knss12/bitcoin2/assets/121605903/3afff6e6-9acb-44d2-88b2-40d57a20fde2"> 
  </div>

  - 게시된 글 제목을 클릭 시 상세 정보가 들어있는 모달창이 나타난다.
  - 한번 더 제목 클릭 시 모달창이 닫힌다.
  - 밑에 있는 Input 창에 글을 작성후 '글 올리기' 버튼을 누르면 게시된다.
  - 게시된 글에 있는 '삭제' 버튼을 누르면 글이 삭제된다.

  ## Notfound 화면

  - #### 잘못된 url 주소로 이동시 해당 화면이 나옴

  <div align="center">
      <img src = "https://github.com/knss12/bitcoin2/assets/121605903/aa2b4767-a1e2-4ddb-b406-145c14deb834"> 
  </div>

  - useNavigate와 onClick을 이용해 메인 페이지로 이동이 가능하다.

  ## Login 화면

  - #### 로그인 화면

  <div align="center">
      <img src = "https://github.com/knss12/bitcoin2/assets/121605903/4b697370-4464-46d6-bfe7-0d6465997693"> 
  </div>

  - ID와 PW를 입력할 수 있는 input 제작
  - 비밀번호 표시가 가능한 체크박스 제작
  - useNavigate를 사용하여 'Create Account' 누르면 회원가입 화면으로 이동

  - #### 회원가입(Account)화면

  <div align="center">
      <img src = "https://github.com/knss12/bitcoin2/assets/121605903/ec9be82f-8972-47c9-bf8d-07309005250a"> 
  </div>

  - 회원가입에 필요한 정보를 입력할 수 있는 input창 제작
  - 각각의 input에 정보 입력시 조건에 맞지않으면 알람이 뜬다.
  - 해당조건 만족을 표시할 수 있는 체크박스 제작
