import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state={
      teams: this.props.teams
    };
    this.getModalContent = this.getModalContent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewTeam = this.addNewTeam.bind(this);
    this.handleTeamsChange = this.handleTeamsChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  handleTeamsChange(event, index){
   // evt = window.event;
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const teams = this.state.teams;
    teams[index] = value;

    this.setState({
      teams: teams
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    this.props.submit(this.state);
    event.preventDefault();
  }

  addNewTeam(){
    let teams = this.state.teams;
    this.state.teams.push("");
    this.setState({teams: teams});
  }

  getModalContent(){
    if(this.props.type === "name"){
      return (<div className="input-container">
            <div className="close-btn" onClick={this.props.close}>Close X</div>
            <h3>Edit Name</h3>
            <div> 
              <span><label>Name : </label></span>
              <input type="text" name="name" onChange={this.handleInputChange}/>
            </div>
          </div>);
    }
    else if(this.props.type === "address"){
      return (<div className="input-container">
            <div className="close-btn" onClick={this.props.close}>Close X</div>
            <h3>Edit Address</h3>
            <div> 
              <span><label>Address : </label></span>
              <input type="text" name="address" onChange={this.handleInputChange}/>
            </div>
          </div>);
    }
    else {
      return (<div className="input-container">
            <div className="close-btn" onClick={this.props.close}>Close X</div>
            <h3>Add Teams</h3>
            {this.state.teams.map((el, index)=>
              <div key={index}> 
              <span><label>Team {index} : </label></span>
              <input type="text" name={"teams["+index+"]"} onChange={(event)=>this.handleTeamsChange(event,index)}/>
            </div>)}
            <button className="addTeamBtn" onClick={this.addNewTeam}>+Add Another</button>
          </div>);
    }
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          {this.getModalContent()}

          <div>
            <button className="modal-btn1" onClick={this.props.close}>Cancel</button>
            <button className="modal-btn2" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
