import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

class BackendView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
      this.setState({ comments: res.data });
    });
  }

  render() {
    return (
      <Table responsive>
        <tbody>
          {this.state.comments.map(comment => (
            <tr key={comment.id}>{comment.email}</tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default BackendView;
