
import React from 'react'
import {  Route, Routes} from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'
import Form3 from './pages/Form3'
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';



const App = () => {
	
	return (
		
		<div>
			<Routes>
				
				<Route path="/Register" exact element={<Register />} />
				<Route path="/" exact element={<Login />} />
				<Route path="/Premiere/:Code" element={<Form1 />} />
				<Route path="/Deuxieme/:Code" element={<Form2 />} />
				<Route path="/Troisieme/:Code" element={<Form3 />} />

			
			</Routes>
		</div>
)
}

export default App		