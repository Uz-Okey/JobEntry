
import { Routes, Route } from 'react-router-dom'
import 'flowbite';
import Navbar from './pages/Navbar'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
import SettingsPages from './pages/SettingsPages'
import EarningPage from './pages/EarningPage'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}

        />
        <Route path='/aboutpage' element={<AboutPage />} />
        <Route path='dashboardpage' element={<DashboardPage />} />
        <Route path='settingspage' element={<SettingsPages />} />
        <Route path='earningspage' element={<EarningPage />} />
        <Route path='servicepage' element={<ServicePage />} />
        <Route path='/contactpage' element={<ContactPage />} />
      </Routes>

    </>
  )
}

export default App
