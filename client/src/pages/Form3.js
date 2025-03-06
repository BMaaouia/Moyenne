import React, { Component,useRef } from 'react';
import axios from 'axios';
import { ReactDOM } from 'react-dom/client';


import '../App.css';






export default class From_test3 extends Component {
  constructor(props) {
    super(props);
  
    this.onChangeUnix = this.onChangeUnix.bind(this);
    this.onChangeADF = this.onChangeADF.bind(this);
    this.onChangeAN = this.onChangeAN.bind(this);
    this.onChangeCS = this.onChangeCS.bind(this);
    this.onChangeCCNA = this.onChangeCCNA.bind(this);
    this.onChangeCCCA3 = this.onChangeCCCA3.bind(this);
    this.onChangeCCCF3 = this.onChangeCCCF3.bind(this);
    this.onChangeJAVA = this.onChangeJAVA.bind(this);
    this.onChangeEnvEnt = this.onChangeEnvEnt.bind(this);
    this.onChangeGL = this.onChangeGL.bind(this);
    this.onChangeIPEss = this.onChangeIPEss.bind(this);
    this.onChangeIPRoute = this.onChangeIPRoute.bind(this);
    this.onChangeUML = this.onChangeUML.bind(this) ; 
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeProjetJava = this.onChangeProjetJava.bind(this);
    this.onChangeSwitched = this.onChangeSwitched.bind(this);
    this.onChangeSGBD = this.onChangeSGBD.bind(this);
    this.onChangeTEI = this.onChangeTEI.bind(this);
    this.onChangeWEB = this.onChangeWEB.bind(this);
    this.onChangeTLA = this.onChangeTLA.bind(this);   
    this.onChangeCode = this.onChangeCode.bind(this);

   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        Unix : 0,
        ADF : 0,
        AN : 0,
        CS : 0,
        CCNA : 0,
        CCCA3 : 0,
        CCCF3 : 0,
        JAVA : 0,
        EnvEnt : 0,
        GL : 0,
        IPEss : 0,
        IPRoute : 0,
        UML : 0, 
        Mobile : 0,
        ProjetJava : 0,
        Switched : 0,
        SGBD : 0,
        TEI : 0,
        WEB : 0,
        TLA : 0,
        Code : 0,
   
    }

  }

    componentDidMount() {
    axios.get('http://localhost:5000/Troisieme/'+window.location.pathname.split('/')[2])
      .then(res => {  
        console.log(res.data);
     if (res.data) {
      this.setState({
        Unix : res.data.Unix,
        ADF : res.data.ADF,
        AN : res.data.AN,
        CS : res.data.CS,
        CCNA : res.data.CCNA,
        CCCA3 : res.data.CCCA3,
        CCCF3 : res.data.CCCF3,
        JAVA : res.data.JAVA,
        EnvEnt : res.data.EnvEnt,
        GL : res.data.GL,
        IPEss : res.data.IPEss,
        IPRoute : res.data.IPRoute,
        UML : res.data.UML,
        Mobile : res.data.Mobile,
        ProjetJava : res.data.ProjetJava,
        Switched : res.data.Switched,
        SGBD : res.data.SGBD,
        TEI : res.data.TEI,
        WEB : res.data.WEB,
        TLA : res.data.TLA,
        Code : res.data.Code,
        });
        }
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
    } //end componentDidMount

 
      
      

  onChangeUnix(e) {
    this.setState({
      Unix: parseFloat(document.getElementById('ccUNIX').value)*0.4+parseFloat(document.getElementById('examUNIX').value)*0.6
    });
  }

    onChangeADF(e) {
    this.setState({
        ADF: parseFloat(document.getElementById('ccADF').value)*0.4+parseFloat(document.getElementById('examADF').value)*0.6
        });
    }
    onChangeAN(e) {
    this.setState({
        AN: parseFloat(document.getElementById('ccAN').value)*0.4+parseFloat(document.getElementById('examAN').value)*0.6
        });
    }

    onChangeCS(e) {
    this.setState({
        CS: parseFloat(document.getElementById('tpCS').value)*0.2+parseFloat(document.getElementById('examCS').value)*0.8
        });
    }

    onChangeCCNA(e) {
    this.setState({
        CCNA: parseFloat(document.getElementById('examCCNA').value)
        });
    }

    onChangeCCCA3(e) {
    this.setState({
        CCCA3: parseFloat(document.getElementById('ccCCCA3').value)*0.4+parseFloat(document.getElementById('examCCCA3').value)*0.6
        });
    }

    onChangeCCCF3(e) {
    this.setState({
        CCCF3: parseFloat(document.getElementById('ccCCCF3').value)*0.3+parseFloat(document.getElementById('tpCCCF3').value)*0.2+parseFloat(document.getElementById('examCCCF3').value)*0.5
    }
    );
    }

    onChangeJAVA(e) {
    this.setState({
      JAVA :  parseFloat(document.getElementById('ccJAVA').value)*0.3+parseFloat(document.getElementById('tpJAVA').value)*0.2+parseFloat(document.getElementById('examJAVA').value)*0.5
    }
    );
    }

    onChangeEnvEnt(e) {
    this.setState({
        EnvEnt : parseFloat(document.getElementById('ccEnvEnt').value)*0.4+parseFloat(document.getElementById('examEnvEnt').value)*0.6
        }
        );
        }

        onChangeGL(e) {
        this.setState({
            GL : parseFloat(document.getElementById('ccGL').value)*0.6+parseFloat(document.getElementById('examGL').value)*0.4
            }
            );
            }

       onChangeIPEss(e) {
         this.setState({
                IPEss : parseFloat(document.getElementById('ccIPEss').value)*0.4+parseFloat(document.getElementById('examIPEss').value)*0.6
                }
                );
                }
      onChangeIPRoute(e) {
                this.setState({
                    IPRoute : parseFloat(document.getElementById('ccIPRoute').value)*0.4+parseFloat(document.getElementById('examIPRoute').value)*0.6
                    }
                    );
                    }

     onChangeUML(e) {
                    this.setState({
                            UML : parseFloat(document.getElementById('ccUML').value)*0.4+parseFloat(document.getElementById('examUML').value)*0.6
                            }
                            );
                            }
 
            
        onChangeMobile(e) {
        this.setState({
            Mobile : parseFloat(document.getElementById('examMobile').value)
            }
            );
            }

        onChangeProjetJava(e) {
        this.setState({
            ProjetJava : parseFloat(document.getElementById('examProjetJava').value)
            }
            );
            }

        onChangeSwitched(e) {
        this.setState({
            Switched : parseFloat(document.getElementById('ccSwitched').value)*0.4+parseFloat(document.getElementById('examSwitched').value)*0.6
            }
            );
            }

        onChangeSGBD(e) {
        this.setState({
            SGBD : parseFloat(document.getElementById('ccSGBD').value)*0.4+parseFloat(document.getElementById('examSGBD').value)*0.6
            }
            );
            }

        onChangeTEI(e) {
        this.setState({
            TEI : parseFloat(document.getElementById('ccTEI').value)*0.3+parseFloat(document.getElementById('tpTEI').value)*0.2+parseFloat(document.getElementById('examTEI').value)*0.5
            }
            );
            }

        onChangeWEB(e) {
        this.setState({
            WEB : parseFloat(document.getElementById('examWEB').value)
            }
            );
            }

        onChangeTLA(e) {
        this.setState({
            TLA : parseFloat(document.getElementById('ccTLA').value)*0.4+parseFloat(document.getElementById('examTLA').value)*0.6
            }
            );
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

    const Troisieme = {
      
        Unix: this.state.Unix,
        ADF: this.state.ADF,
        AN: this.state.AN,
        CS: this.state.CS,
        CCNA: this.state.CCNA,
        CCCA3: this.state.CCCA3,
        CCCF3: this.state.CCCF3,
        JAVA: this.state.JAVA,
        EnvEnt: this.state.EnvEnt,
        GL: this.state.GL,
        IPEss: this.state.IPEss,
        IPRoute: this.state.IPRoute,
        UML : this.state.UML,
        Mobile: this.state.Mobile,
        ProjetJava: this.state.ProjetJava,
        Switched: this.state.Switched,
        SGBD: this.state.SGBD,
        TEI: this.state.TEI,
        WEB: this.state.WEB,
        TLA: this.state.TLA,
        Code: this.state.Code?this.state.Code:window.location.pathname.split('/')[2], 
    }

    console.log(Troisieme);
    console.log(window.location.pathname.split('/')[2]);
    //

    axios.get('http://localhost:5000/Troisieme/'+Troisieme.Code).then(res => {
      if (res.data)  { 
        axios.post('http://localhost:5000/Troisieme/'+Troisieme.Code+'/update', Troisieme)
      } else { axios.post('http://localhost:5000/Troisieme/add', Troisieme)
      .then(res => console.log(res.data));
      }
    }); 
      
   var moy = 0 ; 

     moy = parseFloat(this.state.Unix+this.state.ADF+this.state.AN+this.state.CS+this.state.CCNA+this.state.CCCA3+this.state.CCCF3+this.state.JAVA+this.state.EnvEnt+this.state.GL+this.state.IPEss+this.state.IPRoute+this.state.UML+this.state.Mobile+this.state.ProjetJava+this.state.Switched+this.state.SGBD+this.state.TEI+this.state.WEB+this.state.TLA)/20;

     const user = {
      Code: this.state.Code?this.state.Code:window.location.pathname.split('/')[2],
      Moyenne: moy,
   }

     axios.post('http://localhost:5000/user/'+window.location.pathname.split('/')[2]+'/setMoyenne', user).then(res => console.log(res.data));
     
    
    document.getElementById('moyenne').value = moy;

  }

  render() {
  
    return (
    <>
      
      <form onSubmit={this.onSubmit}>
      
      <div className="form-row">
      <table className="content">  
        <thead >
          <tr>
            <th className='header'>Matiere</th>
            <th className='header'>ETC</th>
            <th className='header'>Note CC</th>
            <th className='header'>Note TP</th>
            <th className='header'>Note Examen</th>
            <th colSpan="2" className='header'>Moyenne Matiere</th>
          </tr>
          </thead> 
      <tbody>
        {/*  //////////////////////////////////////////////// Unix /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>Unix</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input  type="text" className="form-control" placeholder="CC" id='ccUNIX' onChange={this.onChangeUnix} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examUNIX'  placeholder="Examen" onChange={this.onChangeUnix} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
         
            <input type="text" className="form-control" id='moy' value={this.state.Unix} placeholder=""></input>
           
        
          </div>
          </td>
          <td> {this.ch(this.state.Unix)}</td>
        </tr>

        {/*  //////////////////////////////////////////////// ADF /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>ADF</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccADF' onChange={this.onChangeADF} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examADF'  placeholder="Examen" onChange={this.onChangeADF} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.ADF} placeholder="" ></input>
            
             </div>
          </td>
          <td>{this.ch(this.state.ADF)}</td>
        </tr>
        

        {/*  //////////////////////////////////////////////// AN /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>AN</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccAN' onChange={this.onChangeAN} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examAN'  placeholder="Examen" onChange={this.onChangeAN} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.AN} placeholder="" ></input>
            
        
          
          </div>
          </td>
          <td>{this.ch(this.state.AN)}</td>
        </tr>
      

        {/*  //////////////////////////////////////////////// CS /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CS</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          <input type="text" className="form-control"    disabled></input>
              </div>
          </td>
          
          <td>
          <div className="col-md-12">
          <input type="text" className="form-control" placeholder="CC" id='tpCS' onChange={this.onChangeCS} defaultValue='0'  required></input>
       
           
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCS'  placeholder="Examen" onChange={this.onChangeCS} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.CS} placeholder="" ></input>
          
          
        
          </div>
          </td>
          <td>{this.ch(this.state.CS)}</td>
        
        </tr>

        {/*  //////////////////////////////////////////////// CCNA /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CCNA</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control"  disabled></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCCNA'  placeholder="Examen" onChange={this.onChangeCCNA} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.CCNA} placeholder="" ></input>
           
        
         
          </div>
          </td>
          <td>{this.ch(this.state.CCNA)}</td>
        </tr>
      
    
        {/*  //////////////////////////////////////////////// CCCA3 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CCCA3</label>
          </td>
          <td>
            <label>5</label>
          </td>
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccCCCA3' onChange={this.onChangeCCCA3} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCCCA3'  placeholder="Examen" onChange={this.onChangeCCCA3} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.CCCA3} placeholder="" ></input>
         
        
          
          </div>
          </td>
          <td>{this.ch(this.state.CCCA3)}</td>
        </tr>
       
        {/*  //////////////////////////////////////////////// CCCF3 /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>CCCF3 </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='ccCCCF3'  placeholder="Examen" onChange={this.onChangeCCCF3} defaultValue='0' required ></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpCCCF3'  placeholder="Examen" onChange={this.onChangeCCCF3} defaultValue='0' required ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examCCCF3'  placeholder="Examen" onChange={this.onChangeCCCF3} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.CCCF3} placeholder="" ></input>
           
         
          </div>
          </td>
          <td>{this.ch(this.state.CCCF3)}</td>
        </tr>
       

        {/*  //////////////////////////////////////////////// ProjetJava /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>ProjetJava</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" disabled></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examProjetJava'  placeholder="Examen" onChange={this.onChangeProjetJava} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.ProjetJava} placeholder="" ></input>
        
          
          </div>
          </td>
          <td>{this.ch(this.state.ProjetJava)}</td>
        </tr>
        
        {/*  //////////////////////////////////////////////// EnvEnt /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>EnvEnt</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccEnvEnt' onChange={this.onChangeEnvEnt} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examEnvEnt'  placeholder="Examen" onChange={this.onChangeEnvEnt} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.EnvEnt} placeholder="" ></input>
            
          </div>
          </td>
          <td>{this.ch(this.state.EnvEnt)}</td>
        </tr>
       
        {/*  //////////////////////////////////////////////// GL /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>GL</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='examGL' onChange={this.onChangeGL} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='ccGL'  placeholder="Examen" onChange={this.onChangeGL} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.GL} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.GL)}</td>
        </tr>
       
        {/*  //////////////////////////////////////////////// IPEss /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>IPEss</label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccIPEss' onChange={this.onChangeIPEss} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examIPEss'  placeholder="Examen" onChange={this.onChangeIPEss} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.IPEss} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.IPEss)}</td>
        </tr>
    
        {/*  //////////////////////////////////////////////// IPRoute /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label>IPRoute </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control"  id='ccIPRoute'  placeholder="Examen" onChange={this.onChangeIPRoute} defaultValue='0' required  ></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled  ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examIPRoute'  placeholder="Examen" onChange={this.onChangeIPRoute} defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.IPRoute} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.IPRoute)}</td>
        </tr>
       
        {/*  //////////////////////////////////////////////// UML    /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label> UML </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccUML' onChange={this.onChangeUML} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examUML'  placeholder="Examen" onChange={this.onChangeUML  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.UML} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.UML)}</td>
        </tr>
       
                {/*  //////////////////////////////////////////////// Mobile    /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label> Mobile </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" disabled></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examMobile'  placeholder="Examen" onChange={this.onChangeMobile  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.Mobile} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.Mobile)}</td>
        </tr>
        
        {/*  //////////////////////////////////////////////// JAVA    /////////////////////////////////////////////////////////// */}
        <tr>
          
          <td>
            <label> JAVA </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccJAVA' onChange={this.onChangeJAVA} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpJAVA' onChange={this.onChangeJAVA} defaultValue='0'  required ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examJAVA'  placeholder="Examen" onChange={this.onChangeJAVA  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.JAVA} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.JAVA)}</td>
        </tr>
  
                {/*  //////////////////////////////////////////////// Switched    /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label> Switched </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccSwitched' onChange={this.onChangeSwitched} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examSwitched'  placeholder="Examen" onChange={this.onChangeSwitched  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.Switched} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.Switched)}</td>
        </tr>
                 
                {/*  //////////////////////////////////////////////// SGBD    /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label> SGBD </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccSGBD' onChange={this.onChangeSGBD} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examSGBD'  placeholder="Examen" onChange={this.onChangeSGBD  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.SGBD} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.SGBD)}</td>
        </tr>
      
                {/*  //////////////////////////////////////////////// TEI    /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label> TEI </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccTEI' onChange={this.onChangeTEI} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" id='tpTEI' onChange={this.onChangeTEI} defaultValue='0'  required ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examTEI'  placeholder="Examen" onChange={this.onChangeTEI  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.TEI} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.TEI)}</td>
        </tr>
       
                {/*  //////////////////////////////////////////////// WEB    /////////////////////////////////////////////////////////// */}
      <tr>
          
          <td>
            <label> WEB </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" disabled></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examWEB'  placeholder="Examen" onChange={this.onChangeWEB  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.WEB} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.WEB)}</td>
        </tr>
      

        {/*  //////////////////////////////////////////////// TLA    /////////////////////////////////////////////////////////// */}
        <tr>
          
          <td>
            <label> TLA </label>
          </td>
          <td>
            <label>5</label>
          </td>
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" placeholder="CC" id='ccTLA' onChange={this.onChangeTLA} defaultValue='0'  required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12">
        
            <input type="text" className="form-control" disabled ></input>
          </div>
          </td> 
          
          <td>
          <div className="col-md-12">
          
            <input type="text" className="form-control" id='examTLA'  placeholder="Examen" onChange={this.onChangeTLA  } defaultValue='0' required></input>
          </div>
          </td>
          
          <td>
          <div className="col-md-12 ">
            
            <input type="text" className="form-control" id='moy' value={this.state.TLA} placeholder="" ></input>
           
          </div>
          </td>
          <td>{this.ch(this.state.TLA)}</td>
         
        </tr>













        </tbody>
        </table>
      
        <input type='hidden' value={this.state.Code} ></input>
        {console.log(this.moy)}
<br />
<br />
      </div>
    <div className="bot">
    <button class="button-77" role="button" type='submit'>Calculer Moyenne</button>
      <div className="inputMoy">
      <label className="inputtt">Votre Moyenne : </label>
     
      <input type="text"  id='moyenne' className="inputMoy1" value={this.moy} placeholder="" disabled></input>

      
   </div>        
     
   
      </div>
    </form>

    </>
    )

    
  }
}