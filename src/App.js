import "./App.css";
import Nav from "./Nav";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<h1>This is site </h1>} />
					<Route path="/add" element={<h1>Thi is site </h1>} />
					<Route path="/update" element={<h1>s is site </h1>} />
				</Routes>
				<h1>E Dashboard</h1>
			</BrowserRouter>
		</div>
	);
}

export default App;
