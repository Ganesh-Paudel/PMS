import {button} from 'react'

interface NavCompProps {
    title: string;
	onButtonClick: (title: string) => void;
}

export default function NavComp({title, onButtonClick}: NavCompProps){


    return(
		<div className="text-slate-400 hover:text-white hover:bg-slate-400 p-3 rounded-lg cursor-pointer transition-all">
			<button onClick={() => onButtonClick(title)}>
				{title}
			</button>
		</div>
    )
}
