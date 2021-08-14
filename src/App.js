import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import DocTitleOne from '../../react-hook-reduce/src/components/DocTitleOne';
import DocTitleTwo from '../../react-hook-reduce/src/components/DocTitleTwo';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
    <DocTitleTwo/>
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;