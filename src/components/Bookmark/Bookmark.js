import React from "react";
import axios from "axios";
export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repoName: null };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/bookmarks")
      .then(res => {
        this.setState({ repoName: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.repoName &&
          this.state.repoName.map(name => {
            return (
              <div>
                <p>{name}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
