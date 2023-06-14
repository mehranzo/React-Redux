import React from "react";


class searchBar extends React.Component {
  state = { term: this.props.initialValue};

  onFormSubmit=(e) =>{
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control rounded"
            placeholder="Search for a serial"
            value={this.state.term}
            onChange={(e)=>this.setState({term:e.target.value})}
          />

          <button className="btn btn-outline-primary" type="submit">
            search
          </button>
        </div>
      </form>
    );
  }
}

export default searchBar;
