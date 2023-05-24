import { useState } from 'react'
import './App.css'
import Calender from './components/calender';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center'>
      <Calender/>
    </div>
  )
}

export default App;
