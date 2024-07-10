import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("purple")
  {
    // function ChangeColor(color){
    //   setColor(color);
    // }
  }
  
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ background: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full shodow-lg text-black'
              style={{backgroundColor: 'red'}}
            >
              Red
            </button>

            <button
              onClick={() => setColor("blue")} 
              className='outline-none px-4 py-1 rounded-full shodow-lg text-black'
              style={{backgroundColor: 'blue'}}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("green")} 
              className='outline-none px-4 py-1 rounded-full shodow-lg text-black'
              style={{backgroundColor: 'green'}}
            >
              Green
            </button>

            {/* added more color button */}
            <button
              onClick={() => setColor("pink")}
              className='outline-none px-4 py-1 rounded-full shodow-lg text-black'
              style={{backgroundColor: 'pink'}}
            >
              Pink
            </button>

            <button
              onClick={() => setColor("orange")}
              className='outline-none px-4 py-1 rounded-full shodow-lg text-black'
              style={{backgroundColor: 'orange'}}
            >
              Orange
            </button>


            <button
              onClick={() => setColor("skyblue")}
              className='outline-none px-4 py-1 rounded-full shodow-lg text-black'
              style={{backgroundColor: 'skyblue'}}
            >
              Skyblue
            </button>











          </div>
        </div>
      </div>
    </>
  )
}

export default App
