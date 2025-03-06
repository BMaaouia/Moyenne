import React, { Component, useEffect, useRef } from 'react';
import axios from 'axios';
import xtype from 'xtypejs'
import $ from 'jquery';
import Slide from './Slider.js'
import PropTypes from 'prop-types'




var nekes = 0 ;  


export default class From_test extends Component {
  
  constructor(props) {
    super(props);

    this.onChangeAlgo1 = this.onChangeAlgo1.bind(this);
    this.onChangeAlgo2 = this.onChangeAlgo2.bind(this);
    this.onChangeAPP0 = this.onChangeAPP0.bind(this);
    this.onChangeCCCA1 = this.onChangeCCCA1.bind(this);
    this.onChangeCCCF1 = this.onChangeCCCF1.bind(this);
    this.onChangeElectro = this.onChangeElectro.bind(this);
    this.onChangeMultimedia = this.onChangeMultimedia.bind(this);
    this.onChangeMB1 = this.onChangeMB1.bind(this);
    this.onChangeMB2 = this.onChangeMB2.bind(this);
    this.onChangePP1 = this.onChangePP1.bind(this);
    this.onChangePP2 = this.onChangePP2.bind(this);
    this.onChangeProjet = this.onChangeProjet.bind(this);
    this.onChangeSysRes = this.onChangeSysRes.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
   

   
   
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
     
      Algo1: 0,
      Algo2: 0,
      APP0: 0,
      CCCA1: 0,
      CCCF1: 0,
      Electro: 0,
      Multimedia: 0,
      MB1: 0,
      MB2: 0,
      PP1: 0,
      PP2: 0,
      Projet: 0, 
      SysRes: 0,
      Code: '',
   
     
    }
  }

  

   componentDidMount() {
    axios.get('http://localhost:5000/Premiere/'+window.location.pathname.split('/')[2])
      .then(res => {  
       
     if (res.data) {
      this.setState({
        Algo1: res.data.Algo1,
        Algo2: res.data.Algo2,
        APP0: res.data.APP0,
        CCCA1: res.data.CCCA1,
        CCCF1: res.data.CCCF1,
        Electro: res.data.Electro,
        Multimedia: res.data.Multimedia,
        MB1: res.data.MB1,
        MB2: res.data.MB2,
        PP1: res.data.PP1,
        PP2: res.data.PP2,
        Projet: res.data.Projet,
        SysRes: res.data.SysRes,
        Code: res.data.Code,
      })

      
     }

    }).catch(err => { console.log(err); });
    } 

    
      

  onChangeAlgo1(e) {
    this.setState({
      Algo1: parseFloat(document.getElementById('ccAL1').value)*0.4+parseFloat(document.getElementById('examAL1').value)*0.6
    });
    
  }

  onChangeAlgo2(e) {
    this.setState({
      Algo2: parseFloat(document.getElementById('ccAL2').value)*0.4+parseFloat(document.getElementById('examAL2').value)*0.6
    });
  
  }

  onChangeAPP0(e) {
    this.setState({
      APP0: parseFloat(document.getElementById('app0').value)
    });

  }

  onChangeCCCA1(e) {
    this.setState({
      CCCA1: parseFloat(document.getElementById('ccCA1').value)*0.4+parseFloat(document.getElementById('examCA1').value)*0.6
    });
    
  }

  onChangeCCCF1(e) {
    this.setState({
      CCCF1: parseFloat(document.getElementById('ccCF1').value)*0.2+parseFloat(document.getElementById('tpCF1').value)*0.3+parseFloat(document.getElementById('examCF1').value)*0.5
    });
   
  }

  onChangeElectro(e) {
    this.setState({
      Electro: parseFloat(document.getElementById('ccEL').value)*0.4+parseFloat(document.getElementById('examEL').value)*0.6
    });
    
  }

  onChangeMultimedia(e) {
    this.setState({
      Multimedia: parseFloat(document.getElementById('examMULT').value)
    });
 
  }

  onChangeMB1(e) {
    this.setState({   
      MB1: parseFloat(document.getElementById('ccMB1').value)*0.2+parseFloat(document.getElementById('tpMB1').value)*0.3+parseFloat(document.getElementById('examMB1').value)*0.5
    });
    
  }

  onChangeMB2(e) {  
    this.setState({
      MB2: parseFloat(document.getElementById('ccMB2').value)*0.2+parseFloat(document.getElementById('tpMB2').value)*0.3+parseFloat(document.getElementById('examMB2').value)*0.5
    });
  
  }

  onChangePP1(e) {
    this.setState({
      PP1:  parseFloat(document.getElementById('ccPP1').value)*0.4+parseFloat(document.getElementById('examPP1').value)*0.6
    });
   
  }

  onChangePP2(e) {
    this.setState({
      PP2:  parseFloat(document.getElementById('ccPP2').value)*0.4+parseFloat(document.getElementById('examPP2').value)*0.6
    });
    
  }

  onChangeProjet(e) {
    this.setState({
      Projet: parseFloat(document.getElementById('examPRJ').value)
    });
      
  }

  onChangeSysRes(e) {
    this.setState({
      SysRes:  parseFloat(document.getElementById('ccSR').value)*0.4+parseFloat(document.getElementById('examSR').value)*0.6
    });
    
    
  }


    

  onChangeCode(e) {
    this.setState({
      Code: e.target.value
    });
  }
  
  

  ch(note){
    var check = require('../checked.png');
    var cross = require('../cross.png');
    if (note>=8) {
      return <img src={check} width="20" height="20" alt="check"/>
    } else {
      return <img src={cross} width="20" height="20" alt="cross"/>
    }
  }

  notecontrole(m,noteCC,noteEX){
    
    
    if(m<10){
      var noteCont = (8-noteCC*0.4)/0.6;
     var  noteCont2 = (8-noteEX*0.6)/0.4;
  
      if(noteCont>noteCont2){
        return <input type="number" value={noteCont2} ></input>
      }else{
          return <input type="number" value={noteCont} ></input>
        }
      }
    }


 calculControle(a,b,c,d,e){
  var noteCont = (8-a*0.4)/0.6;
     var  noteCont2 = (8-b*0.6)/0.4;
    if((0<=c) && (c<8)){
  
      d.style.visibility ='inherit';
      if(noteCont>noteCont2){
        e.value = noteCont2;
      }else{
       e.value = noteCont;        }
      }
      if((c<=20) && (c>=8)){
        d.style.visibility ='collapse';
      }


 }

calculControle2(c,d,e){
  if((0<=c) && (c<10)){
  d.style.visibility ='inherit';
  e.value=10
 }
  if((c<=20) && (c>=10)){
    d.style.visibility ='collapse';
  }

  }

  calculControle3(c,d,e){
    if((0<=c) && (c<8)){
      d.style.visibility ='inherit';
      e.value=8
      }
      if((c<=20) && (c>=8)){
        d.style.visibility ='collapse';
      }
    }

ne9es(){
  nekes =10-parseFloat(document.getElementById('Moyenne').value);
  console.log(parseFloat(document.getElementById('Moyenne').value));
 
}      
   



slides(){
 
  return (<>

    <Slide />
  </>
  );
}

push(coefs_8,slide_table){
  slide_table.splice(0,slide_table.length);

  for(var i=0;i<coefs_8.length;i++){
    {
      if(document.getElementsByClassName('slider_input')[i] && document.getElementsByClassName('form-check-input')[i])
      {

        if(document.getElementsByClassName('form-check-input')[i].checked == true )
        {
          
          slide_table.push(
       
       parseFloat(document.getElementsByClassName('slider_input')[i].value)/coefs_8[i]
        ) 
      }
      }
      document.getElementsByClassName('slider_input')[i].value = parseFloat(document.getElementsByClassName('slider_input')[i].value)/coefs_8[i]
      console.log(slide_table);}
}
}
  displayNotes(e) {

    var notes = {"Algo1":this.state.Algo1, "Algo2":this.state.Algo2 , "CCCA1":this.state.CCCA1, "CCCF1":this.state.CCCF1, "Electro":this.state.Electro, "Multimedia":this.state.Multimedia, "MB1":this.state.MB1, "MB2":this.state.MB2, "PP1":this.state.PP1, "PP2":this.state.PP2, "Projet":this.state.Projet, "SysRes":this.state.SysRes};
    var coef = {"Algo1":0.05, "Algo2":0.05 , "CCCA1":0.0666, "CCCF1":0.0666, "Electro":0.05, "Multimedia":0.0333, "MB1":0.1333, "MB2":0.1333, "PP1":0.1166, "PP2":0.0833, "Projet":0.1333, "SysRes":0.0833};
    var keys = Object.keys(notes) ;
    var values = Object.values(notes) ;
    var coefs = Object.values(coef) ; 
    var final = [] ; 
    var slide_table = [] ;
    var coefs_8 = [] ;

   var k=10;

    var AA;

    for (var i = 0; i < 13; i++) {
      
      if(values[i] < 8){
        coefs_8.push(coefs[i]) ;
      
      final.push(<> 
      
      <tr>
      <td><label>{keys[i]}</label></td>
       
     
    
    {this.slides()}
     
       </tr>
       </>);
      
    }
    }
    final.push(<button className="butt" role="button"  onClick={() => this.push(coefs_8,slide_table)}>Click ME</button> )



  
    //get the value of the select
    
   

    return final;
  }
  

  onSubmit(e) {
    e.preventDefault();

    const Premiere = {
      Algo1: this.state.Algo1,
      Algo2: this.state.Algo2,
      APP0: this.state.APP0,
      CCCA1: this.state.CCCA1,
      CCCF1: this.state.CCCF1,
      Electro: this.state.Electro,
      Multimedia: this.state.Multimedia,
      MB1: this.state.MB1,
      MB2: this.state.MB2,
      PP1: this.state.PP1,
      PP2: this.state.PP2,
      Projet: this.state.Projet,
      SysRes: this.state.SysRes,
      Code: this.state.Code?this.state.Code:window.location.pathname.split('/')[2],
    }
    
    console.log(Premiere);
    console.log(window.location.pathname.split('/')[2]);


    
    axios.get('http://localhost:5000/Premiere/'+Premiere.Code)
    .then(res => {
      if (res.data) { 
        axios.post('http://localhost:5000/Premiere/'+Premiere.Code+'/update', Premiere)
      } else { 
        axios.post('http://localhost:5000/Premiere/add', Premiere)
        .then(res => console.log(res.data));
      }
    })

      var Moy=0;

      Moy=(this.state.Algo1*3+this.state.Algo2*2+this.state.APP0+this.state.CCCA1*4+this.state.CCCF1*4+this.state.Electro*3+this.state.Multimedia*2+this.state.MB1*8+this.state.MB2*8+this.state.PP1*7+this.state.PP2*5+this.state.Projet*8+this.state.SysRes*5)/60;
      console.log(Moy);

      const user ={
        Code: this.state.Code?this.state.Code:window.location.pathname.split('/')[2],
        Moyenne: Moy,
      }

      document.getElementById("Moyenne").value=Moy

    axios.post('http://localhost:5000/user/'+Premiere.Code+'/setMoyenne', user)
    .then(res => console.log(res.data));
 

    
     this.calculControle(parseFloat(document.getElementById('ccAL1').value),parseFloat(document.getElementById('examAL1').value)
    ,this.state.Algo1,document.getElementById('tr1'),document.getElementById('Algorithme1'));
     
      this.calculControle(parseFloat(document.getElementById('ccAL2').value),parseFloat(document.getElementById('examAL2').value)
    ,this.state.Algo2,document.getElementById('tr2'),document.getElementById('Algorithme2'));


      this.calculControle(parseFloat(document.getElementById('ccCA1').value),parseFloat(document.getElementById('examCA1').value)
    ,this.state.CCCA1,document.getElementById('tr3'),document.getElementById('CCCA1'));

    
      this.calculControle(parseFloat(document.getElementById('ccCF1').value),parseFloat(document.getElementById('examCF1').value)
    ,this.state.CCCF1,document.getElementById('tr4'),document.getElementById('CCCF1'));


      this.calculControle(parseFloat(document.getElementById('ccEL').value),parseFloat(document.getElementById('examEL').value)
    ,this.state.Electro,document.getElementById('tr5'),document.getElementById('Electronique'));


      this.calculControle(parseFloat(document.getElementById('ccMB1').value),parseFloat(document.getElementById('examMB1').value)
    ,this.state.MB1,document.getElementById('tr7'),document.getElementById('MB1'));

    
      this.calculControle(parseFloat(document.getElementById('ccMB2').value),parseFloat(document.getElementById('examMB2').value)
    ,this.state.MB2,document.getElementById('tr8'),document.getElementById('MB2'));

      
      this.calculControle(parseFloat(document.getElementById('ccPP1').value),parseFloat(document.getElementById('examPP1').value)
    ,this.state.PP1,document.getElementById('tr9'),document.getElementById('PP1'));


      this.calculControle(parseFloat(document.getElementById('ccPP2').value),parseFloat(document.getElementById('examPP2').value)
    ,this.state.PP2,document.getElementById('tr10'),document.getElementById('PP2'));

      
      this.calculControle(parseFloat(document.getElementById('ccSR').value),parseFloat(document.getElementById('examSR').value)
    ,this.state.SysRes,document.getElementById('tr12'),document.getElementById('SysRes'));

      this.calculControle2(this.state.Projet,document.getElementById('tr11'),document.getElementById('Projet'));
      this.calculControle3(this.state.Multimedia,document.getElementById('tr6'),document.getElementById('Multimedia'));


      {this.ne9es()}
      
      
  }

  
  

  render() {
 var esprit=require('../esprit.png');
 var not = [];
    
    return (
<>
      <div className="omek">
<nav>
  <a><img src={esprit} width="100" height="100" ></img></a>
  <a href="#header" onClick={function(){document.getElementById('table_controle').style.visibility='inherit';}}>Home</a>
  <a href="#tim-vine" onClick={function(){document.getElementById('table_controle').style.visibility='collapse';}}>Tim Vine</a>
  <a href="#bill-hicks" onClick={function(){document.getElementById('element').style.visibility='inherit';}}>Bill Hicks</a>
  <a href="#stewart-francis">Stewart Francis</a>

</nav>


      <form className="container" onSubmit={this.onSubmit}>
      <br />
      <div className="form-row">
      <table className='content' >  
        <thead className="header">
          <tr>
            <th >Matiere</th>
            <th >ETC</th>
            <th >Note CC</th>
            <th  >Note TP</th>
            <th >Note Examen</th>
            <th  colspan="2">Moyenne Matiere</th>
          </tr>
          </thead> 
      <tbody>
        {/*  //////////////////////////////////////////////// Algo1 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Algorithme 1</label>
          </td>
          
          <td>
            <label>3</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccAL1' onChange={this.onChangeAlgo1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required ></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examAL1'  placeholder="Examen" onChange={this.onChangeAlgo1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy1' value={this.state.Algo1}  placeholder="" ></input>
            
          </div>
          </td>
          
          <td>
          {this.ch(this.state.Algo1)}
          </td>
        
        </tr>

        {/*  //////////////////////////////////////////////// Algo2 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Algorithme 2</label>
          </td>

          <td>
            <label>2</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccAL2' onChange={this.onChangeAlgo2} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examAL2'  placeholder="Examen" onChange={this.onChangeAlgo2} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy2' value={this.state.Algo2} placeholder="" /* pattern="20|[1][0-9]|[0-9]"  */></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.Algo2)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// APP0 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>APP0</label>
          </td>
          
          <td>
            <label>1</label>
          </td>

          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC"   disabled></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='app0'  placeholder="Examen" onChange={this.onChangeAPP0} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][0-9]|[0-9][.][0-9]|[1][0-9][.][0-9][0-9]|[0-9][.][0-9][0-9]"required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy3' value={this.state.APP0} placeholder=""  ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.APP0)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// CCCA1 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CCCA1</label>
          </td>
          
          <td>
            <label>4</label>
          </td>

          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccCA1' onChange={this.onChangeCCCA1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]"  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" placeholder="TP"    disabled></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCA1'  placeholder="Examen" onChange={this.onChangeCCCA1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy3' value={this.state.CCCA1} placeholder=""  ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.CCCA1)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// CCCF1 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CCCF1</label>
          </td>

          <td>
            <label>4</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccCF1' onChange={this.onChangeCCCF1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]"  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpCF1' onChange={this.onChangeCCCF1} defaultValue='0'  pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCF1'  placeholder="Examen" onChange={this.onChangeCCCF1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy4' value={this.state.CCCF1}  placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.CCCF1)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// Electro /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Electronique</label>
          </td>

          <td>
            <label>3</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccEL' onChange={this.onChangeElectro} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examEL'  placeholder="Examen" onChange={this.onChangeElectro} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy5' value={this.state.Electro} placeholder=""  ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.Electro)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// Multimedia /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Multimedia </label>
          </td>
          
          <td>
            <label>2</label>
          </td>

          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examMULT'  placeholder="Examen" onChange={this.onChangeMultimedia} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy6' value={this.state.Multimedia} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.Multimedia)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// MB1 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>MB1</label>
          </td>

          <td>
            <label>8</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccMB1' onChange={this.onChangeMB1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpMB1' onChange={this.onChangeMB1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examMB1'  placeholder="Examen" onChange={this.onChangeMB1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy7' value={this.state.MB1} placeholder=""  ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.MB1)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// MB2 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>MB2</label>
          </td>

          <td>
            <label>8</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccMB2' onChange={this.onChangeMB2} pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpMB2' onChange={this.onChangeMB2} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examMB2'  placeholder="Examen" onChange={this.onChangeMB2} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy8' value={this.state.MB2} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.MB2)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// PP1 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>PP1</label>
          </td>

          <td>
            <label>7</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccPP1' onChange={this.onChangePP1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][0-9]|[0-9][.][0-9]|[1][0-9][.][0-9][0-9]|[0-9][.][0-9][0-9]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examPP1'  placeholder="Examen" onChange={this.onChangePP1} defaultValue='0' pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy9' value={this.state.PP1} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.PP1)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// PP2 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>PP2</label>
          </td>

          <td>
            <label>5</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccPP2' onChange={this.onChangePP2} pattern="20|[1][0-9]|[0-9]|[1][0-9][.][0-9]|[0-9][.][0-9]|[1][0-9][.][0-9][0-9]|[0-9][.][0-9][0-9]" defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examPP2'  placeholder="Examen" onChange={this.onChangePP2} pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy10' value={this.state.PP2} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.PP2)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// Projet /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Projet </label>
          </td>
          
          <td>
            <label>8</label>
          </td>

          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examPRJ'  placeholder="Examen" onChange={this.onChangeProjet} pattern="20|[1][0-9]|[0-9]|[1][0-9][.][0-9]|[0-9][.][0-9]|[1][0-9][.][0-9][0-9]|[0-9][.][0-9][0-9]" defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="number" className="form-control" id='moy11' value={this.state.Projet} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.Projet)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// SysRes /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>SysRes</label>
          </td>

          <td>
            <label>5</label>
          </td>
          
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccSR' onChange={this.onChangeSysRes} pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" defaultValue={0}  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examSR'  placeholder="Examen" onChange={this.onChangeSysRes} pattern="20|[1][0-9]|[0-9]|[1][0-9][.][2][5]|[1][0-9][.][5]|[1][0-9][.][7][5]|[0-9]|[0-9][.][2][5]|[0-9][.][5]|[0-9][.][7][5]" defaultValue={0} required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy12'  value={this.state.SysRes} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.SysRes)}
          </td>

        </tr>

      
    

        </tbody>
        </table>
      
        
        
       
      </div>
      <br />
      <br />  
      
      <div className="bot">
        <button class="button-77" role="button" type='submit'>Calculer Moyenne</button>
        <div className="inputMoy">
          
          <label className="inputtt">Votre Moyenne : </label>
      
          <input type="text"  id='Moyenne' className="inputMoy1" value={this.moy} placeholder="" disabled></input>

        </div>        

      </div>
      </form>
      </div>
<div id="list-item-2">
<br />
<br />
<br />


<table class="content2" id='table_controle'>
  <thead>
    <tr>  
      <th className='header'>#</th>
      <th className='header'>Matiere</th>
      <th className='header'>La note minimum a aquerire dans la session controle</th>
     
    </tr>
  </thead>
  <tbody>
    <tr id="tr1" className='controle'>
      <th scope="row">1</th>
      <td >Algorithme 1</td>
      <td><input type="text"  className='form-control' id="Algorithme1"></input></td>
     
    </tr>
    <tr id="tr2" className='controle'>
      <th scope="row">2</th>
      <td>Algorithme 2</td>
      <td><input type="text" className="form-control" id="Algorithme2"></input></td>
     
    </tr>

    <tr id="tr3" className='controle'>
      <th scope="row">3</th>
      <td>CCCA1</td>
      <td><input type="text" className="form-control" id="CCCA1"></input></td>
      
      
    </tr>
    <tr id="tr4" className='controle'>
      <th scope="row">3</th>
      <td>CCCF1</td>
      <td><input type="text" className="form-control" id="CCCF1"></input></td>
      
    </tr>
    <tr id="tr5" className='controle'>
      <th scope="row">3</th>
      <td>Electronique</td>
      <td><input type="text"  className="form-control" id="Electronique"></input></td>
      
    </tr>
    <tr id="tr6" className='controle'>
      <th scope="row">3</th>
      <td>Multimedia</td>
      <td><input type="text" className="form-control" id="Multimedia"></input></td>
      
    </tr>
    <tr id="tr7" className='controle'>
      <th scope="row">3</th>
      <td>MB1</td>
      <td><input type="text" className="form-control" id="MB1"></input></td>
      
    </tr>
    <tr id="tr8" className='controle'>
      <th scope="row">3</th>
      <td>MB2</td>
      <td><input type="text"  className="form-control" id="MB2"></input></td>
      
    </tr>
    <tr id="tr9" className='controle'>
      <th scope="row">3</th>
      <td>PP1</td>
      <td><input type="text" className="form-control" id="PP1"></input></td>
      
    </tr>
    <tr id="tr10" className='controle'>
      <th scope="row">3</th>
      <td>PP2</td>
      <td><input type="text" className="form-control" id="PP2"></input></td>
      
    </tr>
    <tr id="tr11" className='controle'>
      <th scope="row">3</th>
      <td>Projet</td>
      <td><input type="text"  className="form-control" id="Projet"></input></td>
      
    </tr>
    <tr id="tr12" className='controle'>
      <th scope="row">3</th>
      <td>SysRes</td>
      <td><input type="text"  className="form-control" id="SysRes"></input></td>
      
    </tr>
  </tbody>
</table>

  <br />
  <br />
  <br /> 
 
 
  
 <br />
  <br />
  <br /> 




  <table className='content3' id='element'>
  <thead className="header">
          <tr>
            <th  colspan="2" >Matiere</th>
            <th >Pourcentage</th>
            <th  >Note à aquerire</th>
          </tr>
          </thead> 
  <tbody>
  
   { this.displayNotes()}
  
  </tbody></table>
   

    
























 
  </div>
  
</>
   
  )

    
  }
}