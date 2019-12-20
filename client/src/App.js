import React from 'react';
import './App.css';
import Members from './components/members/members';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </header>
      <Members />
    </div>
  );
}

export default App;
