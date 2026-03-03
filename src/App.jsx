import './App.css'
import LandingPage from './components/LandingPage'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="landing-main">
      <Showcase
        title="Landing Page Design"
        link="https://x.com/simi_uiux/status/2027688914757013951"
      >
        <LandingPage />
      </Showcase>
    </div>
  )
}

export default App