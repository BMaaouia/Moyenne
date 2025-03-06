import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import Form1 from './Form1'
var i=0;
    var k=100;

class Horizontal extends Component {
  
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0,
      vl: 0,
      min:0,
      max:0
    }
    
  }

  onChangeCheckBox = () =>{
    for(var i=0;i<13;i++){
    if(document.getElementsByClassName('form-check-input')[i].checked == false ){
    document.getElementsByClassName('slider_class')[i].style.visibility='collapse';
    }
    else{
      document.getElementsByClassName('slider_class')[i].style.visibility='inherit';
  
    }
  }
  }
//he

  handleChangeStart = () => {
    console.log('Change event started')
    console.log('Value: ' + this.state.value)
  };

  handleChange = (value) => {
    this.setState({
      value: value,
      vl:(10-parseFloat(document.getElementById("Moyenne").value)), 
      min:0,
      max:k
    })
    
    
    
    
    
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
    
  };

  




  render () {
    var { value } = this.state
    var {vl} = this.state
    var {min} = this.state
    var {max} = this.state
    //k=k-value
    return (
      
     <>
     
     <td><div class="form-check">
      <input class="form-check-input" type="checkbox" id={"flexCheckIndeterminate"} onChange={this.onChangeCheckBox} ></input>
      <label class="form-check-label" for="flexCheckIndeterminate">
        checkbox
      </label>
    </div></td>
     <td>
     <div  id='slider_id' className='slider_class'>
      
        <Slider
          
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
          step={25}
        />
        <div className='value' id= 'oo'>{value}</div>
      </div>
      </td>
      <td>
      <input className='slider_input' value={(vl*(value/100))} id='1'></input>
      </td>
      
       </>
   );
    
  }
 

}      


export default Horizontal