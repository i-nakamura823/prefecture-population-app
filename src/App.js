//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header'
import PrefectureList from './components/PrefectureList';

function App() {
  return (
    <div className="App">
      <hr />
      <Header />
      <hr />
      <PrefectureList />
    </div>
  );
}

export default App;
