import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typescript from './Typescript';
import Component from './components/Component';
import State from './components/State';

function App() {

  const flag = 1;

  return (
    <div>
      <State />
      {/* {mock.map(item => (<Component title={item.title} content={item.content} />))}
      { true && (<h1>true</h1>)}
      { true ? (<h1>true</h1>) : (<h1>false</h1>) } */}
    </div>
  );
}

export default App;

const mock = [
  {
    title: '1 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '2 번째 제목',
    content: '안녕하세요 반갑습니다.'
  },
  {
    title: '3 번째 제목',
    content: '안녕하세요 반갑습니다.'
  }
];