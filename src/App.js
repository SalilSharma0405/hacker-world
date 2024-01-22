import { useState } from 'react';

import { Header } from './Header';
import { FormSubmit } from './FormSubmit';
import { ListView } from './ListView/ListView';

import './App.scss';


function App() {
  const [userName, setUserName] = useState('');
  return (
    <div className="App">
      <Header />
      <FormSubmit setUserName={setUserName}/>
      <ListView userName={userName}/>
    </div>
  );
}

export default App;
