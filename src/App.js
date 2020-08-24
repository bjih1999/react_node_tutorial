import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = [
  {
    'id':1,
    'img':'https://placeimg.com/64/64/1',
    'name':'변지현',
    'birthday':'990829',
    'gender':'남자',
    'job':'대학생'
  },

  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
  },

  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
    
]

class App extends Component{
  render(){
    return(
      <div>
        {customer.map(c => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday}/>
        })}
      </div>
    );
  }
}

export default App;
