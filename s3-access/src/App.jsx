import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link } from 'react-router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>welcome</h1>
      <div style={{
        margin:"4px"
      }}>
        <Link to={'/upload'}>upload</Link>
      </div>

      <div>
        <Link to={'/view'}>View</Link>
      </div>
    </>
  );
}

export default App;
