# Vuex

- 컴포넌트 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 Vuex 라이브러리
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

## Vuex 설치

(2022년 2월 7일부터 Vuex 라이브러리를 설치할 때 아래와 같이 라이브러리 버전을 명시)
`npm i vuex@3.6.2`

- Vuex는 싱글 파일 컴포넌트 체계에서 NPM 방식으로 라이브러리를 설치하는 게 좋다.
- ES6와 함께 사용해야 더 많은 기능과 이점을 제공받을 수 있음
- [라이브러리 버전과 공식 문서 주소 변경](https://joshua1988.github.io/web-development/vuejs/vue3-as-default/)

## Vuex 등록

(Vuex 를 store 라고 부른다)  
`/src/store/store.js`

```
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vue.Store({

});

```

## Vuex 기술요소

- state: 여러 컴포넌트에 공유되는 데이터 `data`
- getters: 연산된 state 값을 접근하는 속성 `computed`
- mutations: state 값을 변경하는 이벤트 로직. 메서드 `methods`
- actions: 비동기 처리 로직을 선언하는 메서드 `aysnc methods`

### state란?

여러 컴포넌트 간에 공유할 데이터 - 상태

```javascript
// vue
data: {
  message: "Hello Vue.js!";
}

//vuex
state: {
  message: "Hello Vue.js!";
}
```

```javascript
// vue
<p>{{ message }}</p>

//vuex
<p>{{ this.$store.state.message }}</p>
```

### getters란?

state 값을 접근하는 속성이자 computed()처럼 미리 연산된 값을 접근하는 속성

```javascript
// store.js
state: {
    num: 10
},
getters: {
    getNumber(state){
        return state.num
    },
    doubleNumber(state){
        return state.num * 2
    }
}

```

```javascript
<p>{{ this.$store.getters.getNumver }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
```

### mutations란?

- state의 값을 변경할 수 있는 유일한 방법이자 메서드
- 뮤테이션은 Commit() 으로 동작시킨다.

```javascript
// storage.js
state : {num : 10},
mutations: {
    printNumbers(state){
        return state.num
    },
    sumNumbers(state, anotherNum){
        return state.num + anotherNum
    }
}

// App.vue
this.$store.commit('printNumbers') // 호출->실행 10
this.$store.commit('sumNumbers',20)// 30
```

- state를 변경하기 위해 mutations를 동작시킬 때 인자(payload)를 전달할 수 있음

```javascript
// storage.js
state:{storeNum:10},
nutations:{
    modifyState(state,payload){ // payload : 관행적으로 payload로 쓴다
        console.log(payload.str) //passed from payload
        return state.storeNum += payload.num // 20 + 30
    }
}

//App.vue
this.$store.commit('modifyState',{
    str: 'passed from payload',
    num: 20
})
```

### state는 왜 직접 변경하지 않고 Mutations로 변경할까?

- 여러 개의 컴포넌트에서 아래와 같이 state 값을 변경한는 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기 어렵다.
- 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한 건지 확인하기 어렵다.
- 따라서, 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행. 반응성, 디버깅, 테스팅 혜택

```javascript
methods: {
    increaseCounter(){
        this.$store.state.counter++
    }
}
```

### actions란?

[Promise 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)  
[자바스크립트 비동기 처리 이해하기](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)

- 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
- 데이터 요청, Promise, ES6 async과 같은 비동기 처리는 모두 actions에 선언
- 비동기처리: 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성
- 프로미스: 자바스크립트 비동기 처리에 사용되는 객체. 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용.
  ![이미지](./readme-img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-09%20%EC%98%A4%ED%9B%84%2011.15.05.png)

```javascript
// store.js
state:{
    num:10
},
mutations:{
    dubleNumber(state){
        state.num*2
    }
},
actions:{
    delayDoubleNumber(context){ // context: actions에서 mutations 접근
        context.commit('doubleNumber')
    }
}
//App.vue
this.$store.dispatch('delayDoubleNumber') // displatch(=commit) actions 호출

```

```javascript
// store.js
mutations:{
    addCounter(state){
        state.counter++
    }
},
actions:{
    delayedAddCounter(context){
        setTimeout(()=> context.commit('addCounter'),2000)
    }
}

// App.vue
methods:{
    incrementCounter(){
        this.$store.dispatch('delayedAddCounter')
    }
}


```
