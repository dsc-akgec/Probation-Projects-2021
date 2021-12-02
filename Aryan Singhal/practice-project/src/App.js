import React from 'react';
import './App.css';
import Header from './components/Header';
import CreateNote from './components/createNote';
import Note from './components/Note';
function App(){
  return (<>
  <Header/>
  <CreateNote/>
  <Note/>
  </>);
}

export default App;
