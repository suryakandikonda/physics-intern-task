import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Message, Header } from 'semantic-ui-react';
import HeaderComponent from './components/HeaderComponent';
import MyAccountMain from './components/MyAccountMain';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyAccountMain />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
