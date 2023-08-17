import React from 'react'

export default function Typescript() {

  // ! 변수
  // ! 변수의 타입을 지정하지 않으면 처음 초기화된 데이터의 타입으로
  // ! 변수의 타입이 결정
  let variable1 = '문자열';
  // ! 키워드 변수명: 데이터타입; 변수를 선언
  let variable2: string;
  // ! string, number, boolean
  // ! object
  let variable3: object = {
    name: '홍길동',
    age: 30
  };
  // ! null: null 타입
  let variable4: null = null;
  // ! []: 배열 타입
  let variable5: string[] = ['a', 'b'];
  // ! undefined: 선언되고 초기화하지 않은 상태
  let variable6: undefined = undefined;
  // ! any: 모든 타입
  let variable7: any

  // ! |: 유니온 타입
  let variable8: string | number;

  // ! 커스텀 객체 타입
  // ! 1. class
  class Object1 {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
  }

  // ! 2. interface
  // ! 3. type

  let object2: Object1 = {
    name: '홍길동',
    age: 30
  };

  object2.name;

  return (
    <div>Typescript</div>
  )
}
