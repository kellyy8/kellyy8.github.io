import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AboutMe from './AboutMe.tsx'
import Projects from './Projects.tsx'
import Hobbies from './Hobbies.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AboutMe /> */}
    {/* <Projects /> */}
    <Hobbies />
  </StrictMode>,
)
