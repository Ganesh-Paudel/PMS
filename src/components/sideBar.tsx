import NavComp from "./navComp"

interface SideBarProps {
	activeView: string;
	setActiveView: (view: string) => void;
}

export default function SideBar({activeView, setActiveView}: SideBarProps){

	const handleClick = (title: string) => {
		console.log("Clicked on: ", title);
		setActiveView(title);
	}

	return(
			<aside className="h-screen w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
				<div className="mb-10">
					<h2 className="text-Left pl-10 text-white text-2xl font-bold tracking-tight">
					PMS
					</h2>
				</div>
				
				<nav className="space-y-2">
					<NavComp title="Dashboard" onButtonClick = {handleClick}/>
					<NavComp title = "Projects" onButtonClick = {handleClick}/>
					<NavComp title = "Tasks" onButtonClick = {handleClick}/>
				</nav>
			</aside>	
	)
}
