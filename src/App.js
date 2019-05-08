import React from 'react';
import Ethernet from './components/ethernet';
import Wireless from './components/wireless';

import './App.css';

function App() {
  return (
    <div className="App">
        <Ethernet/>
        <Wireless/>
    </div>
  );
}

export default App;
