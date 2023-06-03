import Hero from './components/Hero'
import Demos from './components/Demos'
// import Demo from './components/Demo'
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero/>
        <Demos/>
      </div>
    </main>
  )
}

export default App;
