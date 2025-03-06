import React, { Component } from 'react';
import axios from 'axios';





export default class From_test2 extends Component {
  constructor(props) {
    super(props);


    this.onChangeMicro = this.onChangeMicro.bind(this);
    this.onChangeBD = this.onChangeBD.bind(this);
    this.onChangeCCCA2 = this.onChangeCCCA2.bind(this);
    this.onChangeCCCF2 = this.onChangeCCCF2.bind(this);
    this.onChangeFonRes = this.onChangeFonRes.bind(this);
    this.onChangeMB3 = this.onChangeMB3.bind(this);
    this.onChangeMB4 = this.onChangeMB4.bind(this);
    this.onChangeCPP = this.onChangeCPP.bind(this);
    this.onChangeProjetCPP = this.onChangeProjetCPP.bind(this);
    this.onChangeProjetWeb = this.onChangeProjetWeb.bind(this);
    this.onChangeResCom = this.onChangeResCom.bind(this);
    this.onChangeScripting = this.onChangeScripting.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);

   

   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
     
        Micro: 0,
        BD: 0,
        CCCA2: 0,
        CCCF2: 0,
        FonRes: 0,
        MB3: 0,
        MB4: 0,
        CPP: 0,
        ProjetCPP: 0,
        ProjetWeb: 0,
        ResCom: 0,
        Scripting: 0,
        Code: 0,
   
     
    }
  }

   componentDidMount() {
    axios.get('http://localhost:5000/Deuxieme/'+window.location.pathname.split('/')[2])
      .then(res => {  
        console.log(res.data);
     if (res.data) {
      this.setState({
        Micro: res.data.Micro,
        BD: res.data.BD,
        CCCA2: res.data.CCCA2,
        CCCF2: res.data.CCCF2,
        FonRes: res.data.FonRes,
        MB3: res.data.MB3,
        MB4: res.data.MB4,
        CPP: res.data.CPP,
        ProjetCPP: res.data.ProjetCPP,
        ProjetWeb: res.data.ProjetWeb,
        ResCom: res.data.ResCom,
        Scripting: res.data.Scripting,
        Code: res.data.Code,
      })
     }
     
    }).catch(err => { console.log(err); });
    } 
 
      

  onChangeMicro(e) {
    this.setState({
      Micro: parseFloat(document.getElementById('ccMic').value)*0.4+parseFloat(document.getElementById('examMic').value)*0.6
    });
  }

  onChangeBD(e) {
    this.setState({
      BD: parseFloat(document.getElementById('ccBD').value)*0.4+parseFloat(document.getElementById('examBD').value)*0.6
    });
  }


  onChangeCCCA2(e) {
    this.setState({
      CCCA2: parseFloat(document.getElementById('ccCA2').value)*0.4+parseFloat(document.getElementById('examCA2').value)*0.6
    });
  }

  onChangeCCCF2(e) {
    this.setState({
      CCCF2: parseFloat(document.getElementById('ccCF2').value)*0.2+parseFloat(document.getElementById('tpCF2').value)*0.3+parseFloat(document.getElementById('examCF2').value)*0.5
    });
  }

  onChangeFonRes(e) {
    this.setState({
      FonRes: parseFloat(document.getElementById('ccFR').value)*0.4+parseFloat(document.getElementById('examFR').value)*0.6
    });
  }


  onChangeMB3(e) {
    this.setState({   
      MB3: parseFloat(document.getElementById('ccMB3').value)*0.2+parseFloat(document.getElementById('tpMB3').value)*0.3+parseFloat(document.getElementById('examMB3').value)*0.5
    });
  }

  onChangeMB4(e) {  
    this.setState({
      MB4: parseFloat(document.getElementById('ccMB4').value)*0.2+parseFloat(document.getElementById('tpMB4').value)*0.3+parseFloat(document.getElementById('examMB4').value)*0.5
    });
  }

  onChangeCPP(e) {
    this.setState({
      CPP:  parseFloat(document.getElementById('ccCPP').value)*0.4+parseFloat(document.getElementById('examCPP').value)*0.6
    });
  }

  onChangeProjetCPP(e) {
    this.setState({
      ProjetCPP: parseFloat(document.getElementById('examProjetCPP').value)
    });
  }

  onChangeProjetWeb(e) {
    this.setState({
      ProjetWeb: parseFloat(document.getElementById('examProjetWeb').value)
    });
  }

  onChangeResCom(e) {
    this.setState({
      ResCom:  parseFloat(document.getElementById('ccRC').value)*0.4+parseFloat(document.getElementById('examRC').value)*0.6
    });
  }

  onChangeScripting(e) {
    this.setState({
      Scripting: parseFloat(document.getElementById('examSC').value)
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



  onSubmit(e) {
    e.preventDefault();

    const Deuxieme = {
      Micro: this.state.Micro,
      BD: this.state.BD,
      CCCA2: this.state.CCCA2,
      CCCF2: this.state.CCCF2,
      FonRes: this.state.FonRes,
      MB3: this.state.MB3,
      MB4: this.state.MB4,
      CPP: this.state.CPP,
      ProjetCPP: this.state.ProjetCPP,
      ProjetWeb: this.state.ProjetWeb,
      ResCom: this.state.ResCom,
      Scripting: this.state.Scripting,
      Code: this.state.Code?this.state.Code:window.location.pathname.split('/')[2],
    }
    
    console.log(Deuxieme);
    console.log(window.location.pathname.split('/')[2]);


    
    axios.get('http://localhost:5000/Deuxieme/'+Deuxieme.Code)
    .then(res => {
      if (res.data) { 
        axios.post('http://localhost:5000/Deuxieme/'+Deuxieme.Code+'/update', Deuxieme)
      } else { 
        axios.post('http://localhost:5000/Deuxieme/add', Deuxieme)
        .then(res => console.log(res.data));
      }
    })

      var Moy=0;

      Moy=(4*this.state.Micro+4*this.state.BD+5*this.state.CCCA2+5*this.state.CCCF2+3*this.state.FonRes+2*this.state.Scripting+7*this.state.MB3+7*this.state.MB4+3*this.state.CPP+7*this.state.ProjetCPP+6*this.state.ProjetWeb+3*this.state.ResCom)/60;
      console.log(Moy);

      const user ={
        Code: this.state.Code?this.state.Code:window.location.pathname.split('/')[2],
        Moyenne: Moy,
      }

      document.getElementById("Moyenne").value=Moy

    axios.post('http://localhost:5000/user/'+Deuxieme.Code+'/setMoyenne', user)
    .then(res => console.log(res.data));


    
      
    
      

  }

  

  render() {
 
    
    return (

      
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
            <th  colSpan="2">Moyenne Matiere</th>
          </tr>
          </thead> 
      <tbody>
        {/*  //////////////////////////////////////////////// Micro /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Microcontrôlleur</label>
          </td>
          
          <td>
            <label>4</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccMic' onChange={this.onChangeMicro} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examMic'  placeholder="Examen" onChange={this.onChangeMicro} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeMicro}  value={this.state.Micro} placeholder="" ></input>
            
          </div>
          </td>
          
          <td>
          {this.ch(this.state.Micro)}
          </td>
        
        </tr>

        {/*  //////////////////////////////////////////////// BD /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Base de Données</label>
          </td>

          <td>
            <label>4</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccBD' onChange={this.onChangeBD} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examBD'  placeholder="Examen" onChange={this.onChangeBD} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy'  onChange={this.onChangeBD} value={this.state.BD} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.BD)}
          </td>

        </tr>

    

        {/*  //////////////////////////////////////////////// CCCA2 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CCCA2</label>
          </td>
          
          <td>
            <label>5</label>
          </td>

          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccCA2' onChange={this.onChangeCCCA2} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" placeholder="TP"  defaultValue='0'  disabled></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCA2'  placeholder="Examen" onChange={this.onChangeCCCA2} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeCCCA2}  value={this.state.CCCA2} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.CCCA2)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// CCCF2 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CCCF2</label>
          </td>

          <td>
            <label>5</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccCF2' onChange={this.onChangeCCCF2} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpCF2' onChange={this.onChangeCCCF2} defaultValue='0'  required></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCF2'  placeholder="Examen" onChange={this.onChangeCCCF2} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeCCCF2}  value={this.state.CCCF2} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.CCCF2)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// FonRes /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Fondaments de Reseaux</label>
          </td>

          <td>
            <label>3</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccFR' onChange={this.onChangeFonRes} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examFR'  placeholder="Examen" onChange={this.onChangeFonRes} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeFonRes} value={this.state.FonRes} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.FonRes)}
          </td>

        </tr>


        {/*  //////////////////////////////////////////////// MB3 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>MB3</label>
          </td>

          <td>
            <label>7</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccMB3' onChange={this.onChangeMB3} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpMB3' onChange={this.onChangeMB3} defaultValue='0'  required></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examMB3'  placeholder="Examen" onChange={this.onChangeMB3} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeMB3}  value={this.state.MB3} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.MB3)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// MB4 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>MB4</label>
          </td>

          <td>
            <label>7</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccMB4' onChange={this.onChangeMB4} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpMB4' onChange={this.onChangeMB4} defaultValue='0'  required></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examMB4'  placeholder="Examen" onChange={this.onChangeMB4} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeMB4}  value={this.state.MB4} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.MB4)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// CPP /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CPP</label>
          </td>

          <td>
            <label>3</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccCPP' onChange={this.onChangeCPP} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCPP'  placeholder="Examen" onChange={this.onChangeCPP} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeCPP} value={this.state.CPP} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.CPP)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// ProjetCPP /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>ProjetCPP</label>
          </td>

          <td>
            <label>7</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" disabled defaultValue='0'></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examProjetCPP'  placeholder="Examen" onChange={this.onChangeProjetCPP} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeProjetCPP}  value={this.state.ProjetCPP} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.ProjetCPP)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// Projet Web /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Projet Web </label>
          </td>
          
          <td>
            <label>6</label>
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
          
            <input type="text" className="form-control" id='examProjetWeb'  placeholder="Examen" onChange={this.onChangeProjetWeb} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy'onChange={this.onChangeProjetWeb}  value={this.state.ProjetWeb} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.ProjetWeb)}
          </td>

        </tr>

        {/*  //////////////////////////////////////////////// ResCom /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Reseaux de Communication</label>
          </td>

          <td>
            <label>3</label>
          </td>
          
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccRC' onChange={this.onChangeResCom} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  defaultValue='0'></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examRC'  placeholder="Examen" onChange={this.onChangeResCom} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeResCom}  value={this.state.ResCom} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.ResCom)}
          </td>

        </tr>

         {/*  //////////////////////////////////////////////// Scripting /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Scripting </label>
          </td>
          
          <td>
            <label>2</label>
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
          
            <input type="text" className="form-control" id='examSC'  placeholder="Examen" onChange={this.onChangeScripting} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' onChange={this.onChangeScripting} value={this.state.Scripting} placeholder="" ></input>
          </div>
          </td>

          <td>
          {this.ch(this.state.Scripting)}
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
      
          <input type="text"  id='Moyenne' className="inputMoy1"  placeholder="" disabled></input>

        </div>        

      </div>

      

  </form>

    
    )

    
  }
}