import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Widgets from './Widgets'
import './App.css';

function App() {
  return (
    <div className="app">

      {/* sidebar */}
      <Sidebar />

      {/* feed */}

      <Feed />

      {/* Widgets */}

      <Widgets />

      {/* sidebar */}
    </div>
  );
}

export default App;
