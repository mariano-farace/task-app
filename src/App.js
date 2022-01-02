import React, { Component } from "react";
import Overview from "./components/Overview"
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task:{text: '', id : uniqid()},
      tasks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({task: {text: event.target.value, id: this.state.task.id}});
  }



  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '', id: uniqid() },
     
    })
  }


  render() {
    const { task, tasks } = this.state;
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Enter task
          <input type="text" value={task.text}  onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"  />
      </form>
      <Overview tasks={tasks}/>
    </div>
    )
  }
}

export default App;