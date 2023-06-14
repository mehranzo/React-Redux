import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";
import SerialDetails from "./serialDetails";
import SerialList from "./serialList";
import { Component } from "react";
import axios from "axios";
import Spiner from "../components/spiner/spiner";

class App extends Component {
  state = { serials: [], selectedSerial: null, loading: false, error: null };

  initialsearch = "star wars";

  search = async (term) => {
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );
      console.log("app>search>response.data=", response.data);

      this.setState({
        serials: response.data,
        selectedSerial: response.data[0].show,
        loading: false,
        error: null,
      });
    } catch (e) {
      this.setState({
        serials: [],
        selectedSerial: null,
        loading: false,
        error: e.message,
      });
    }
  };

  onItemClick = (serial) => {
    console.log("click=", serial);
    this.setState({ selectedSerial: serial });
  };

  componentDidMount() {
    this.search(this.initialsearch);
  }

  renderContent() {
    if (this.state.loading) {
      return <Spiner />;
    }
    if (this.state.error) {
      return <div className="alert alert-danger">{this.state.error}</div>;
    }
    return (
      <div className="row">
        <div className=" col-8">
          <SerialDetails selectedSerial={this.state.selectedSerial} />
        </div>
        <div className="col-4">
          <SerialList
            serials={this.state.serials}
            onItemClick={this.onItemClick}
          />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="container mt-3">
        <SearchBar onSubmit={this.search} initialValue={this.initialsearch} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
