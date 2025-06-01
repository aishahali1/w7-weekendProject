import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './routes/Router'

function App() {

  return (
    <>
    {/* <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#E2E2E2', color: '#6E7271' }}
    >
      <header
        className="p-4"
        style={{ backgroundColor: '#384D48', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}
      >
        <img src='/logo.png' className='w-30'></img>
      </header>
      <main className="flex-1 p-6 overflow-auto">
        <div
          className="max-w-xs p-3 rounded-lg mb-4"
          style={{ backgroundColor: '#D8D4D5', color: '#6E7271' }}
        >
          Hey! How’s your day going?
        </div>
        <div
          className="max-w-xs p-3 rounded-lg ml-auto mb-4"
          style={{ backgroundColor: '#ACAD94', color: 'white' }}
        >
          Pretty good, thanks! Working on Chatify colors.
        </div>
      </main>
      <footer
        className="p-4 flex items-center gap-3 border-t"
        style={{ borderColor: '#ACAD94', backgroundColor: 'white' }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-md p-2 outline-none"
          style={{
            backgroundColor: '#D8D4D5',
            border: '1px solid #ACAD94',
            color: '#6E7271',
          }}
        />
        <button
          style={{ backgroundColor: '#384D48', color: 'white' }}
          className="px-4 py-2 rounded-md font-semibold"
        >
          Send
        </button>
      </footer> *
    </div> */}
    <Router></Router>
    </>
  )
}

export default App
