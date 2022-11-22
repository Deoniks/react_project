import React from 'react';
import './index.scss';

function App() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="App">
      <button onClick={()=> setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      {open && ( <div className={`overlay.animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
          </svg>
          <div className = "flexer">
            <div>Main</div>
            <div>News</div>
            <div><button className='btn-flexe'>Login</button></div>
          </div>
        </div>
      </div> )}
    </div>
  );
}

export default App;
