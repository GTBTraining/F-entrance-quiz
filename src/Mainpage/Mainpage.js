/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
// eslint-disable-next-line import/named
import { postAPI } from '../API/api';
// eslint-disable-next-line import/no-unresolved
import './Mainpage.css';

class Mainpage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    teamvisible: false,
    teamlist:[
      [{ id: '1', name: '成吉思汗' },
      { id: '2', name: '鲁班七号' },
      { id: '3', name: '太乙真人' },],
      [{ id: '4', name: '钟无艳' },
      { id: '5', name: '花木兰' },
      { id: '6', name: '雅典娜' },],
      [{ id: '7', name: '芈月' },
      { id: '8', name: '白起' },
      { id: '9', name: '刘禅' },],
      [{ id: '10', name: '庄周' },
      { id: '11', name: '马超' },],
      [{ id: '12', name: '刘备' },
      { id: '13', name: '哪吒' },],
      [{ id: '14', name: '大乔' },
      { id: '15', name: '蔡文姬' },]
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

  handleSubmit() {
    postAPI("http://localhost:8080/team",this.state.teamMembers);
  }

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

    const handleSubmit1 = () => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      const newteamlist=postAPI("http://localhost:8080/team",this.state.teamMembers);
      this.setState({teamlist : newteamlist});

    }

    return (
      <div className="page">
        <div className="content">
          <h4>分组列表</h4>
          <button className="clickbutton" onClick={()=>handleSubmit1()}>
            分组学员
          </button>
        </div>
        <div className="teamlist">
        {teamlist}
        </div>
        <h4 className="teammemberlist">学员列表</h4>
        <br />
        {memberlist}
        <button className="addteamMemberbutton" onClick={this.handleSubmit}>
          + 添加学员
        </button>
      </div>
    );
  }
}

export default Mainpage;
