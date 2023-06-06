# ES6 fot Vue.js

- const & let  
- Arrow Function  
- Enhanced Object Literals  
- Modules

## ES6 란?
ECMAScript 2015와 동일한 용어
ES5(2009년) 이래로 첫 메이저 업데이트가 승인된 해
Vue에서 권고하는 언어 형식

## Babel
https://babeljs.io/  
ES6는 모든 브라우저에서 지원되지 않으므로 transpiling 필요  
ES6 -> ES5 변환하는 컴파일러

## const & let

자바스크립트가 가지고있는 유연함 = 모호한 부분  
새로운 문법을 개정하면서 오류들을 방지  
{}블록 단위로 변수의 범위가 제한되었음
const : 상수 개념. 한번 선언한 값에 대해서 변경할 수 없음  
let : 한번 선언한 값에 대해서 다시 선언할 수 없음

## hoisting

ES5 특징 - hoisting  
함수선언식과 변수는 메모리 공간을 먼저 확보한다  
그 다음에 연산이 일어난다  
최상단으로 끌어 올려진 것처럼 보인다

```javascript
function sum() {
  // function statement 함수선언문
  return 10 + 20;
}

var sum = function () {
  // functino expression 함수표현식
  return 10 + 20;
};
```

```javascript
var sum = 5;
sum = sum + i;
function sumAllNumbers() {
  // ...
}
var i = 10;
```

```javascript
var sum;
function sumAllNumbers() {
  // ...
}
var i;

sum = 5;
sum = sum + i;
i = 10;
```

## Arrow Function - 화살표 함수
- function 이라는 키워드를 사용하지 않고 => 로 대체
- 콜백 함수의 문법을 간결화
```javascript
// ES5 함수 정의 방식
var arr = ["a","b","c"];
arr.forEach(function(value){
    console.log(value)
})

// ES6
arr.forEach(value => console.log(value))
```

## Enhanced Object Literals - 향상된 객체 리터럴
- 객체의 속성을 메서드로 사용할 때 function 예약어 생략
```javascript
var dictionary = {
    words: 100,
    // ES5
    lookup: function(){
        console.log("find words")
    },
    // ES6
    lookup(){
        console.log("find words")
    }
}
```
- 객체의 속성명과 값이 동일할 때 아래와 같이 축약 가능
```javascript
var figures = 10;
var dictionary = {
    figures
    // figures: figures
}
```

## Modules - 자바스크립트 모듈화 방법
- 자바스크립트 모듈 로더 라이브러리(AMD, Commons JS) 기능을 js언어 자체에서 지원(모듈 : 특정 기능을 수행하는 묶음, 재사용성)
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있음
```javascript
// libs/math.js
export function sum(x,y){
    return x+y
}
export var pi = 3.141593;

// main.js
import {sum} from 'libs/math.js';
sum(1,2);
```

## Vue.js 에서 마주칠 default export
- 인캡슐레이션 
- 익명으로 하게되면 이름을 부여해서 사용할 수 있다

```javascript
// util.js
export default function(x){
    return console.log(x)
}

// main.js
import util from 'util.js'
console.log(util); // function(x) { return console.log(x)}
util("hi")

// app.js
import log from 'util.js'
console.log(log)
log("hi")

```