import React, { useEffect } from 'react';
import { createContext } from 'react';
import RequestUtils from './hooks/requestUtils';


export interface IGrafosContext {

}

const GrafosContext = createContext<IGrafosContext>({} as IGrafosContext);

function App() {


	const onMount = () => {
		console.log('onMount');
		if (!RequestUtils.symplaApi) {
			RequestUtils.setAuthToken();
		}
		RequestUtils.symplaApi.get(
			'public/v3/events'
		).then((response) => console.log(response.data));
	}
	useEffect(onMount, []);

	const defaultValues: IGrafosContext = {
	}

	return (
		<GrafosContext.Provider
			value={defaultValues}
		>
			<div className="App">
				oioioi
			</div>
		</GrafosContext.Provider>
	);
}

export default App;
