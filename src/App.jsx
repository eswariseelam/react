import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Cb from './component/button/button'
import {Hello as City}  from './nav'
import ButtonComponet from './component/class based com/cla button'
import CustomImage from './component/function-comp/button/image/image'
import ImageCustom from './component/class based com/image/image'
import CustomTable from  './component/class based com/images/cls table'
import CusTable from './component/function-comp/button/table/fun table'

//a componet will return a single tag or

// componet is a reusable code which  is returned in function or class 
// each and every com should start witha a capital alphabetes

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
       <City/ >
       <ButtonComponet/>
       <CustomImage/>
       <ImageCustom/>
       <CustomTable/>
       <CusTable/>

       

        
      
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
