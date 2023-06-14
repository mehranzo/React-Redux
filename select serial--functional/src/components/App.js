import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./searchBar";
import SerialDetails from "./serialDetails";
import SerialList from "./serialList";
import axios from "axios";
import Spinner from "./spinner/spinner";
import { useState, useEffect } from "react";

function App() {
  const [serials, setSerials] = useState([]);
  const [selectedSerial, setSelectedserial] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initialsearch = "star wars";

  const search = async (term) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );
      console.log("app>search>response.data=", response.data);

      setSerials(response.data);
      setSelectedserial(response.data[0].show);
      setLoading(false);
      setError(null);
    } catch (e) {
      setSerials([]);
      setSelectedserial(null);
      setLoading(false);
      setError((e.message += " ____ لطفا از فیلتر شکن استفاده کنید"));
    }
  };

  const onItemClick = (serial) => {
    console.log("click=", serial);
    setSelectedserial(serial);
  };
  useEffect(() => {
    search(initialsearch);
  }, []);

  const renderContent = () => {
    if (Loading) {
      return <Spinner />;
    }
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
    return (
      <div className="row">
        <div className=" col-8">
          <SerialDetails selectedSerial={selectedSerial} />
        </div>
        <div className="col-4">
          <SerialList serials={serials} onItemClick={onItemClick} />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar onSubmit={search} initialValue={initialsearch} />
      {renderContent()}
    </div>
  );
}

export default App;
