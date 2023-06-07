# Vuex
- 컴포넌트 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- 리엑트 Flux 패턴에서 기인함

## Flux란?
MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴    
Action -> Dispatcher -> Model -> View  
(데이터가 한방향으로 움직인다)
1. action : 사용자 입력 , 화면에서 발생하는 이벤트
2. dispatcher : 모델을 가꾸기 위한 역할. 데이터를 변경하는 방법, 메서드
3. model : 데이터. 화면에 표시할 데이터
4. view : 화면. 사용자에게 비춰지는 화면

## MVC 패턴과 Flux 패턴 비교
1. MVC 패턴 - 양방향
Controller(모델과 뷰를 제어) -> Model(데이터) -> <- View(화면)

2. Flux 패턴 - 단방향
Action -> Dispatcher -> Model -> View 

### MVC 패턴의 문제점  
ex) 페이스북 채팅 화면  
![이미지](./readme-img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-07%20%EC%98%A4%EC%A0%84%206.23.39.png)
- Model View 사이의 방향을 예측할 수 없음  
- 데이터의 흐름을 추적할 수 없음  
- 기능의 추가 및 변경에 따라 생기는 문제접을 예측할 수 없음

### Flux 패턴의 단방향 데이터 흐름
![이미지](./readme-img/스크린샷%202023-06-07%20오전%206.25.20.png)

데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로 처리  
View -> Action -> Dispatcher

## Vuex가 왜 필요할까?  
![이미지](./readme-img/스크린샷%202023-06-07%20오전%206.26.45.png)
복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다.
- 이벤트 버스를 사용하면? 어디서 이벤트를 보냈는지 혹은 어디서 이벤트를 받았는지 알기 어려움. 컴포넌트 간 데이터 전달이 명시적이지 않음.
  
## Vuex로 해결할 수 있는 문제
- MVC 패턴에서 발생하는 구조적 오류
- 컴포넌트 간 데이터 전달 명시 (뷰 개발자 도구로 확인)
- 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제

## Vuex 컨셉
![이미지](readme-img/스크린샷%202023-06-07%20오전%206.32.24.png)
단방향 데이터 흐름
- State: 컴포넌트 간에 공유하는 데이터. data()
- View: 데이터를 표시하는 화면. template
- Action: 사용자의 입력에 따라 데이터를 변경. methods

## Vuex 구조
![이미지](readme-img/스크린샷%202023-06-07%20오전%206.34.40.png)
컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태

[자바스크립트 비동기 처리와 콜백 함수 글 링크(클릭)](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)  
[ 자바스크립트 Promise 쉽게 이해하기 글 링크(클릭)](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)  

## 개요
- 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 Vuex 라이브러리
- Flux 패턴
- state, getters, mutaions, actions
- Helper 기능
- 구조화 방법

