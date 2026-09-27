import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2 className="logo">MyApp</h2>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>

      <footer className="footer">© 2026 MyApp · Deployed with Docker + GitHub Actions</footer>
    </div>
  )
}
