import './App.css'
import LandingPage from './components/LandingPage'
import CardComp from './components/CardComp'
import Showcase from './components/Showcase'
import StatusBoard from './components/StatusBoard'

function App() {
  return (
    <div className="landing-main">

      <Showcase
        title="Status Pills"
        link="https://x.com/danilukstudio/status/1937115432995127527/photo/1"
        className="statusboard"
      >
        <StatusBoard />
      </Showcase>

      <Showcase
        title="Card Design"
        link="https://x.com/Ishanzaad/status/1953154344658059599"
        className="carddemo"
      >
        <CardComp />
      </Showcase>

      <Showcase
        title="Landing Page Design"
        link="https://x.com/simi_uiux/status/2027688914757013951"
        className="landingdemo"
      >
        <LandingPage />
      </Showcase>

    </div>
  )
}

export default App