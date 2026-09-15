import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home2030 from './pages/Home2030.jsx'
import Transformation from './pages/Transformation.jsx'
import JobMarket from './pages/JobMarket.jsx'
import HumanBackup from './pages/HumanBackup.jsx'
import Your2030 from './pages/Your2030.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-mist font-body">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home2030 />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/job-market" element={<JobMarket />} />
          <Route path="/human-backup" element={<HumanBackup />} />
          <Route path="/your-2030" element={<Your2030 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
