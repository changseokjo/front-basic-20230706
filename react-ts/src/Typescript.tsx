import React from 'react'

export default function Typescript() {

  // ! 변수
  // ! 변수의 타입을 지정하지 않으면 처음 초기화된 데이터의 타입으로
  // ! 변수의 타입이 결정
  let variable1 = '문자열';
  // ! 키워드 변수명: 데이터타입; 변수를 선언
  let variable2: string;
  // ! string, number, boolean
  // ! obejct: 객체 타입
  let variable3: object = {
    name: '홍길동',
    age: 30
  };
  // ! null: null 타입
  let variable4: null = null;
  // ! []: 배열 타입
  let variable5: string[] = ['a', 'a'];
  // ! undefined: 선언되고 초기화하지 않은 상태
  let variable6: undefined = undefined;
  // ! any: 모든 타입
  let variable7: any;

  // ! |: 유니온 타입
  let variable8: string | null;
  
  let object1 = {
    name: '홍길동',
    age: 30
  };

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
  interface Object2 {
    name: string;
    age: number;
  }
  // ! 3. type
  type Object3 = {
    name: string,
    age: number
  }

  let object2: Object3 = {
    name: '김길동',
    age: 20
  };

  interface Object4 {
    telNumber: string;
    address?: string;
    getName: () => string;
  }

  const object3: Object2 & Object4 = {
    name: '김길동',
    age: 20,
    telNumber: '1234',
    address: 'qwe',
    getName: () => {
      return '김길동';
    }
  };

  // const name = object3.name;
  // const age = object3.age;
  // const telNumber = object3.telNumber;

  const { name, age, ...other } = object3;
  // other: {
  //   telNumber: '1234',
  //   address: 'qwe'
  // }

  let object4: any; 

  object4 = { other, birth: '1993' };
  object4 = { ...other, birth: '1993' };

  function fun1(): string {
    return 'a';
  }

  let func2: () => string = (): string => {
    return 'a';
  }

  const array = [1, 2, 3, 4];
  const [first, seconds, ...others] = array;

  
  object2.name;

  return (
    <div>{name}</div>
  )
}