/* eslint-disable no-alert */

/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import "./Mainpage.css";

class Mainpage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    addingTeamMemberName: '',
    isAddTeamMember: false,
    teamvisible: false,
    teamlist: [],
    teamMembers: [],
  };

  componentDidMount() {
    this.getAllTeamMembers();
  }

  getAllTeamMembers = () => {
    fetch('http://localhost:8080/members')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          teamMembers: data,
        })
      );
  };

  handleAddStudent = () => {
    this.setState({
      isAddTeamMember: true,
    });
  };

  handleDivideTeam = () => {
    const url = 'http://localhost:8080/teams';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          teamlist: data,
        });
      });
    // console.log(1);
  };

  handleNameChange = (event) => {
    this.setState({
      addingTeamMemberName: event.target.value,
    });
  };

  addNewTeamMember = (event) => {
    if (event.keyCode === 13) {
      const url = 'http://localhost:8080/members';
      fetch(url, {
        mode: 'cors',
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: 'POST',
        body: this.state.addingTeamMemberName,
      }).then((response) => {
        if (response.status === 201) {
          this.getAllTeamMembers();
          alert('添加队员成功！');
        }
      });
      this.setState({
        isAddTeamMember: false,
        addingTeamMemberName: '',
      });
    }
  };

  render() {
    const memberlist = this.state.teamMembers.map((teammember) => (
      <button className="teamMemberbutton" key={teammember.id}>
        {teammember.id}.{teammember.name}
      </button>
    ));

    const teamlist = this.state.teamlist.map((team) => (
      <div className="group">
        <header className="group-header">
          <span>{team.name}</span>
        </header>
        <section>
          {team.memberDtoList.map((teammember) => (
            <button className="teamMemberbutton" key={teammember.id}>
              {teammember.id}.{teammember.name}
            </button>
          ))}
        </section>
      </div>
    ));

    return (
      <div className="page">
        <div className="content">
          <h4>分组列表</h4>
          <button className="clickbutton" onClick={this.handleDivideTeam}>
            分组学员
          </button>
        </div>
        <div className="teamlist">{teamlist}</div>
        <h4 className="teammemberlist">学员列表</h4>
        <br />
        <section>
          {memberlist}
          {this.state.isAddTeamMember ? (
            <input
              type="text"
              value={this.state.addingTeamMemberName}
              onChange={this.handleNameChange}
              onKeyUp={this.addNewTeamMember}
            />
          ) : (
            <button className="addteamMemberbutton" onClick={this.handleAddStudent}>
              + 添加学员
            </button>
          )}
        </section>
      </div>
    );
  }
}

export default Mainpage;
