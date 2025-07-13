# chatbot 프로젝트 -> FE 파트

### ➡️ 개요
- chatbot의 FrontEnd 서버 기동을 위한 프로그램
- 브라우저에 표기될 부분 (React 활용)
- FE 서버에서 BE로 POST 진행 (자원 공유 설정 완료)

### ➡️ 기능 설명
- 메인 홈페이지 : 메인로고 및 페이지 이동, 대화할 AI 선택 (현재 모델이 1개이므로 어떤 AI를 선택해도 동일한 AI로 이동)
- chatbot 홈페이지
  - 사용자의 질문에 AI가 답변을 추론하여 출력

### ➡️ 코드 리뷰
- ChatContainer.js
  > onSubmit : 기존의 Enter 기능을 제출 기능으로 변한 -> 채팅 입력창에서 Enter를 활용하여 입력 전송 가능

- ChatInput.js
  > **Container**에서 설정한 방식으로 Enter 기능 변환
  > 사용자가 작성한 채팅 내역 제출

- ChatLog.js
  > 사용자와 채팅 AI가 추론한 답변을 확인할 수 있는 Log 표기창

- IntroContainer.js
  > Intro.js
  > 어떤 AI와 대화할지 선택하는 창

#### ✅ Simple 코드 리뷰 이미지
![Class](https://github.com/KimMarinet/chatbot_fe/blob/master/img/Class%20Diagram.png)

#### ✅ FE 구현 사진
<p align="center"><img src="https://github.com/KimMarinet/chatbot_fe/blob/master/img/intro.png"/></p>
<p align="center"><img src="https://github.com/KimMarinet/chatbot_fe/blob/master/img/aitalk.png"/></p>
