import React, { Component } from 'react';

class Overview extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const tasks = this.props.tasks
    const toRender = tasks.map((t) => <li key={t.id}>{t.text}</li>)
    return (
      <ul>
      {toRender}
      </ul>
    );
  }
}

export default Overview;