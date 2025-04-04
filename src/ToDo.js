import React from "react";
import { Component } from "react";
import image from "./flower.png";

export class ToDo extends Component {
  state = {
    userInput: "",
    tasks: [],
    crossed: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addTask(e) {
    if (e === "") {
      alert("Please enter a task");
    } else {
      let listArray = this.state.tasks;
      listArray.push(e);
      this.setState({ tasks: listArray, userInput: "" });
    }
  }

  deleteTask() {
    let listArray = this.state.tasks;
    listArray = [];
    this.setState({ tasks: listArray });
  }

  crossedTask(index) {
    this.setState((prevState) => {
      let newCrossed = [...prevState.crossed];
      newCrossed[index] = !newCrossed[index];
      return { crossed: newCrossed };
    });
  }

  render() {
    return (
      <div className="app">
        <div>
          <h1>Your daily masterpiece!</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="container">
            <input
              className="inputAdd"
              type="text"
              placeholder="Add a task"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
            <button
              className="addBtn"
              onClick={() => this.addTask(this.state.userInput)}
              type="submit"
              title="Add Task"
            >
              ➕
            </button>
          </div>
          <ul>
            {this.state.tasks.map((task, index) => (
              <li
                className={this.state.crossed[index] ? "crossed" : ""}
                key={index}
              >
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={this.state.crossed[index] || false}
                  onChange={() => this.crossedTask(index)}
                  title="Cross Task"
                />
                {task}
              </li>
            ))}
          </ul>
          {this.state.tasks.length > 0 && (
            <div className="container">
              <button className="btnDelete" onClick={() => this.deleteTask()} title="Delete All">
                Delete All
              </button>
            </div>
          )}
        </form>
        <div className="container">
          <img className="flower" src={image} alt="flower"></img>
        </div>
      </div>
    );
  }
}
