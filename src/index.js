import React from "react";
import ReactDOM from "react-dom";

import RootPage from "./components/RootPage";
import { Provider } from 'react-redux';

import "./styles.css";
import { createStore } from 'redux';
import reducer from './reducers/index'

function App() {
	const store = createStore(reducer);

	const unsubscribe = store.subscribe(() =>
		console.log(store.getState())
	)

	return (
		<Provider store={store}>
			<div className="App">
				<RootPage />
			</div>
		</Provider>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
