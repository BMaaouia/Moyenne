import { useState } from 'react'
import axios from 'axios';

function App() {
	const [Code, setCode] = useState('')
  

 

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Code,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
      alert('Login successful')
      axios.get('http://localhost:5000/user/'+Code).then(res => {
        console.log(res.data);
        if(res.data.Classe == 1){
          window.location.href = '/Premiere/'+Code
        }else if(res.data.Classe == 2){
          window.location.href = '/Deuxieme/'+Code
          }else if(res.data.Classe == 3){
            window.location.href = '/Troisieme/'+Code
            }
        
        } )
                 
		} else {
			alert('Please check your username and password')
      console.log(data)
      
		}
	}

	return (
		<div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="./template/images/img-01.png" alt="IMG"/>
          </div>
  
          <form className="login100-form validate-form" onSubmit={loginUser}>
            <span className="login100-form-title">
              Member Log in
            </span>
  
            <div className="wrap-input100 validate-input" >
              <input className="input100" 
                    value={Code}
					onChange={(e) => setCode(e.target.value)}
					type="text"
					placeholder="Code" autoFocus/>
              <span className="focus-input100"></span>
            
            </div>
            
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Login
              </button>
            </div>
  
            
  
            <div className="text-center p-t-136">
              <a className="txt2" href='/Register'>
                  Create an account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
	)
}

export default App