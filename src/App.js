import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:{
        isOpen: false,
        type: "name"
      },
      name:"",
      address:"",
      teams: [""]
    };
    this.getModal = this.getModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  updateData(data){
    console.log("test", data);
    this.setState({...data, modal:{isOpen:false}});
  }

  getModal(){
    if(this.state.modal.isOpen){
      return <Modal type={this.state.modal.type} teams={this.state.teams} close={this.closeModal} submit={this.updateData}/>;
    }
  }

  openModal(type){
    let newState = {
      modal:{
        type: type,
        isOpen: true
      }
    };

    this.setState(newState);
  }

  closeModal(){
    let newState = {
      modal:{
        isOpen: false
      }
    };

    this.setState(newState);
  }


  render() {
    return (
      <div className="App">
        <header className="main-header">
          <h1 className="App-title">Sports Magazine</h1>
        </header>
        <section className="content">
          <h1>Sports Magazine Settings</h1>
          <div className="divider">
            <div>
              <span>
                <span className="strong">Name</span>
                <br/>
                {this.state.name}
              </span>
            </div>
            <div><button className="btn" onClick={()=> this.openModal('name')}>Edit Name</button></div>
          </div>
          <div className="divider">
            <div>
              <span>
                <span className="strong">Address</span>
                <br/>
                {this.state.address}
              </span>
            </div>
            <div><button className="btn" onClick={()=> this.openModal('address')}>Edit Address</button></div>
          </div>
          <div className="divider">
            <div>
              <span>
                <span className="strong">Favourite teams</span>
                  {this.state.teams.map((el, index)=> 
                      <span key={index}><br/>{this.state.teams[index]}</span>
                  )}
              </span>
            </div>
            <div>
               <button className="btn" onClick={()=> this.openModal('teams')}>Add Teams</button>
            </div>
          </div>
        </section>
        {this.getModal()}
      </div>
    );
  }
}

export default App;
