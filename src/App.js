import React from 'react';
import logo from './logo.svg';
import './App.css';
import SourceHtml from './components/SourceHtml';

function App() {
  const sources = [
    {
      publication_name: "The New York Times",
      title: "This source app sucks",
      date: new Date(),
      url: "http://www.example.com"
    },
    {
      publication_name: "Vox",
      title: "The suckiness of this sources app, explained",
      date: new Date(),
      url: "http://www.example.com"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <SourceHtml sources={sources}/>
    </div>
  );
}

export default App;
