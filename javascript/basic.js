console.log('Hello Javascript');

// ! 변수
// ! var, let, const로 선언 가능
// ! 키워드 변수명 = 리터럴;

// ! var: 일반 변수 선언 키워드 - 여러가지 문제로 인해 사용하지 않음
// ! let: 블록 변수 선언 키워드 - 블록 단위의 변수 선언 조건이 적용되어 있음 (재할당 가능)
// ! const: 블록 상수 선언 키워드 - 한번 선언하면 재할당 불가능한 상수로 선언

// ! javascript의 변수는 변수에 저장할 수 있는 데이터의 타입이 지정되어 있지 않음
let variable = '문자열';
console.log(variable);
variable = 100;
console.log(variable);
variable = [1, 2, 3];
variable.map();