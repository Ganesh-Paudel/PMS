import { useState } from 'react'
import './App.css'
import SideBar from './components/sideBar'
import Dashboard from './screens/Dashboard'
import Projects from './screens/Projects'
import Tasks from './screens/Tasks'
import Login from './screens/Login'

export default function App() {

const [activeView, setActiveView] = useState("Login");
const [isLoggedIn, setLoggedInStatus] = useState(false);

  return (
	  <div className="flex w-full h-screen items-center justify-center">

		  {isLoggedIn ? 
			  <>
				<SideBar activeView={activeView} setActiveView={setActiveView} />

				<main className="flex-1">
				  {activeView == "Dashboard" && <Dashboard />}
				  {activeView == "Projects" && <Projects />}
				  {activeView == "Tasks" && <Tasks />}
				</main>
			</>

			  : <Login setLoggedIn  = {setLoggedInStatus}  setActiveView = {setActiveView}/> 
		  }

	  </div>
	  
  )
}


function mainPage(){

	return(
		<>
				</>
	)
}

