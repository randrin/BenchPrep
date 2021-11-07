import "./App.css";
import React from "react";
import ElementsList from "./components/ElementsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import { API_BENCH_PREP } from "./components/config";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const response = await fetch(API_BENCH_PREP);
    const data = await response.json();
    this.setState({
      results: data,
    });
  }

  render() {
    const filteredElements = this.state.results.filter(
      (element) =>
        element.theme
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase()) ||
        element.quote
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
    );

    //console.log(filteredElements, ' filtered elements in render function');
    return (
      <div>
        <h2 className="my-5">BenchPrep Simple React List</h2>
        <div className="App">
          <Search
            placeholder="Search by theme o quote..."
            handleChange={(ev) =>
              this.setState({ searchField: ev.target.value })
            }
          />
          <ElementsList
            elements={filteredElements}
            currentSeaech={this.state.searchField}
          />
        </div>
      </div>
    );
  }
}
