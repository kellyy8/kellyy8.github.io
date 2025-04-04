import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
import AboutMe from './AboutMe.tsx'
import Projects from './Projects.tsx'
import Hobbies from './Hobbies.tsx'
// import NavBar from './NavBar.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<NavBar />}> */}
          <Route index={true} path="/" element={<App />} />
          <Route index={false} path="/about" element={<AboutMe />} />
          <Route index={false} path="/projects" element={<Projects />} />
          <Route index={false} path="/hobbies" element={<Hobbies />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)