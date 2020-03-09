import React from "react";
import axios from "axios";
import "./style.css";
import star from "./star.svg";
export default class Search extends React.Component {
  state = {
    inputValue: null
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
    axios
      .get(`http://localhost:4000/api/repos/?q=${e.target.value}`)
      .then(res => {
        this.setState({
          repos: res.data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  bookmark = (e, id) => {
    e.persist();
    axios
      .post("http://localhost:4000/api/bookmarks/mark-repo/" + id)
      .then(res => {
        if (res.data.message === "repo is unmarked") {
          e.target.classList.add("unmarked");
          e.target.classList.remove("marked");
        } else if (res.data.message === "repo is marked") {
          e.target.classList.add("marked");
          e.target.classList.remove("unmarked");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <input
          className="input"
          type="text"
          placeholder="Search repo"
          onChange={e => this.handleChange(e)}
        />
        {this.state.repos &&
          this.state.repos.map(repo => {
            return (
              <div className="list-items">
                <ul>
                  <li>
                    <div className="owner">
                      <img src={repo.owner.avatar_url} />
                      <p>{repo.owner.login}</p>
                    </div>
                  </li>
                </ul>
                <a href={repo.html_url}>{repo.name}</a>
                <img
                  src={star}
                  className="icon"
                  key={repo.name}
                  onClick={e => this.bookmark(e, repo.name)}
                />
              </div>
            );
          })}
      </div>
    );
  }
}
