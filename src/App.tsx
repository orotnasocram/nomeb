
import './App.css'

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>nomep</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <p>paragrafo normale</p>
      <h2>NomeB</h2> */}
        <img src="media/test.jpg" alt="Descrizione immagine"></img>
      <h2>Musica</h2>
      <p>
        <audio id="test-audio" controls preload="none">
          <source src="media/testsound.mp3" type="audio/mpeg"></source>
          Your browser does not support the audio element.
        </audio>
      </p>
      <h2>Live</h2>
      <p>
        <ul>
            <li>2026-01-01 - Live @ locale</li>
            <li>2026-01-02 - Live @ locale</li>
            <li>2026-01-03 - Live @ locale</li>
            <li>2026-01-04 - Live @ locale</li>
            <li>2026-01-05 - Live @ locale</li>
            <li>2026-01-06 - Live @ locale</li>
            <li>2026-01-07 - Live @ locale</li>
        </ul>
      </p>
      
    </>
  )
}

export default App
