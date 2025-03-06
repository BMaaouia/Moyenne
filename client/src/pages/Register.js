import React, { Component } from 'react';
import axios from 'axios';


export default class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeClasse = this.onChangeClasse.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: '',
      Code: '',
      Classe: 0,
      Moyenne: 0,
   
    }
  }

  onChangeName(e) {
    this.setState({
    Name: e.target.value
    })
  }

  onChangeCode(e) {
    this.setState({
      Code: e.target.value
    })
  }

  onChangeClasse(e) {
    this.setState({
      Classe: e.target.value
    })
  }

 

  onSubmit(e) {
    e.preventDefault();

    const User = {
      Name: this.state.Name,
      Code: this.state.Code,
      Classe: this.state.Classe,
      Moyenne: this.state.Moyenne,
    }

    console.log(User);

    axios.post('http://localhost:5000/user/Register', User)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="./template/images/img-01.png" alt="IMG"/>
          </div>
  
          <form className="login100-form validate-form" onSubmit={this.onSubmit}>
            <span className="login100-form-title">
              New Member 
            </span>
  
            <div className="wrap-input100 validate-input" >
              <input className="input100" 
                     type="text"
                     required
                     value={this.state.Name}
                     onChange={this.onChangeName}
                     placeholder= "Name"
                     autoFocus/>
              <span className="focus-input100"></span>
             
            </div>
  
            <div className="wrap-input100 validate-input" >
              <input className="input100" 
                    type="text"
                    required
                    value={this.state.Code}
                    onChange={this.onChangeCode}
                    placeholder= "Code"
                    pattern="[0-9]{3}[A-Z]{3}[0-9]{4}"/>
              <span className="focus-input100"></span>
            
            </div>

            <div className="wrap-input100 validate-input" >
              <select
                  className="input100" 
                    type="number"
                    required
                    value={this.state.Classe}
                    onChange={this.onChangeClasse}
                    placeholder= "Classe" >
                     <option value="">Classe</option>  
                    <option value="1">1 ére année</option>
                    <option value="2">2 éme année</option>
                    <option value="3">3 éme année</option>
                    <option value="4">4 éme année</option>
                    <option value="4">5 éme année</option>
              
              </select> 

              <span className="focus-input100"></span>
            
            </div>
            
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Create an account
              </button>
            </div>
  
            
  
            <div className="text-center p-t-136">
              <a className="txt2" href='/'>
                  Login
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}
