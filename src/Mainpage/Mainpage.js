/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

// import { postAPI } from '../API/api';
// eslint-disable-next-line import/no-unresolved
import './Mainpage.css';

class Mainpage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    addingStudentName: '',
    isAddTeamMember: false,
    teamvisible: false,
    teamlist: [
      [
        { id: '1', name: '成吉思汗' },
        { id: '2', name: '鲁班七号' },
        { id: '3', name: '太乙真人' },
      ],
      [
        { id: '4', name: '钟无艳' },
        { id: '5', name: '花木兰' },
        { id: '6', name: '雅典娜' },
      ],
      [
        { id: '7', name: '芈月' },
        { id: '8', name: '白起' },
        { id: '9', name: '刘禅' },
      ],
      [
        { id: '10', name: '庄周' },
        { id: '11', name: '马超' },
      ],
      [
        { id: '12', name: '刘备' },
        { id: '13', name: '哪吒' },
      ],
      [
        { id: '14', name: '大乔' },
        { id: '15', name: '蔡文姬' },
      ],
    ],
    teamMembers: [
      { id: '1', name: '成吉思汗' },
      { id: '2', name: '鲁班七号' },
      { id: '3', name: '太乙真人' },
      { id: '4', name: '钟无艳' },
      { id: '5', name: '花木兰' },
      { id: '6', name: '雅典娜' },
      { id: '7', name: '芈月' },
      { id: '8', name: '白起' },
      { id: '9', name: '刘禅' },
      { id: '10', name: '庄周' },
      { id: '11', name: '马超' },
      { id: '12', name: '刘备' },
      { id: '13', name: '哪吒' },
      { id: '14', name: '大乔' },
      { id: '15', name: '蔡文姬' },
    ],
  };

  getTeamMember = () => {
    fetch('http://localhost:8080/team')
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
    // const newteamlist = postAPI('http://localhost:8080/team', this.teamMembers);
    // this.setState({ teamlist: newteamlist });
  };

  handleNameChange = (event) => {
    this.setState({
      addingStudentName: event.target.value,
    });
  };

  addNewTeamMember = (event) => {
    console.log(1);
    console.log(event);
  };

  render() {
    const memberlist = this.state.teamMembers.map((teammember) => (
      <button className="teamMemberbutton" key={teammember.id}>
        {teammember.id}.{teammember.name}
      </button>
    ));

    const teamlist = this.state.teamlist.map((teammember) => (
      <button className="teamMemberbutton" key={teammember.id}>
        {teammember.id}.{teammember.name}
      </button>
    ));

    const isAddTeamMember = this.state.isAddTeamMember ? (
      // eslint-disable-next-line react/void-dom-elements-no-children
      <input
        type="text"
        value={this.state.addingStudentName}
        onChange={this.handleNameChange}
        onKeyUp={this.addNewTeamMember}
      >
        + 添加学员
      </input>
    ) : (
      <button className="addteamMemberbutton" onClick={this.handleAddStudent}>
        + 添加学员
      </button>
    );

    return (
      <div className="page">
        <div className="content">
          <h4>分组列表</h4>
          <button className="clickbutton" onClick={this.handleDivideTeam()}>
            分组学员
          </button>
        </div>
        <div className="teamlist">{teamlist}</div>
        <h4 className="teammemberlist">学员列表</h4>
        <br />
        {memberlist}
        {isAddTeamMember}
      </div>
    );
  }
}

export default Mainpage;
