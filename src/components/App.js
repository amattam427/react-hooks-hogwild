import React, {useState} from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";


import hogs from "../porkers_data";

function App() {
	//we should create a general state with the data first so that we could use it through out the app
	const [hogData, setHogData] = useState(hogs)
	//console.log(hogData)

	
	return (
		<div className="App">
			<Nav />
			<HogContainer hogData={hogData}/>
		</div>
	);
}

export default App;
