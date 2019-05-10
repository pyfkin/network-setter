import React from 'react';
import Ethernet from './components/ethernet';
import Wireless from './components/wireless';
import ButtonSet from './components/buttonSet';

import './App.css';

function App() {
  return (
    <div className='container'>
        <div className='row main'>
            <Ethernet />
            <Wireless />
        </div>
        <ButtonSet/>
    </div>
  );
}

export default App;
