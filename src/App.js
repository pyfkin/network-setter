import React from 'react';
import Ethernet from './components/ethernet';
import Wireless from './components/wireless';


function App() {
  return (
    <div className='container'>
        <div className='row'>
            <Ethernet />
            <Wireless />
        </div>
    </div>
  );
}

export default App;
