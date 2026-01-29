import { useState } from 'react'
import './App.css'
import SideBar from './components/sideBar'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Tasks from './components/Tasks'

export default function App() {

const [activeView, setActiveView] = useState("Dashboard");

  return (
	  <div className="flex">
		<SideBar activeView={activeView} setActiveView={setActiveView} />
    <main className="flex-1">
      {activeView == "Dashboard" && <Dashboard />}
      {activeView == "Projects" && <Projects />}
      {activeView == "Tasks" && <Tasks />}
    </main>
	  </div>
  )
}
