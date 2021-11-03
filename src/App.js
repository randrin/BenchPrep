import './App.css';
import React from 'react';
import ElementsList from './components/ElementsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      results: [],
      searchField:''
    }
  }

  async componentDidMount () {
    const response = await fetch('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json');
    const data = await response.json();
    this.setState({
      results: data
    })
  }
  
  render(){
    const filteredElements = this.state.results.filter(element => (
      //element.theme.toLowerCase().includes(this.state.searchField.toLowerCase())
      element.quote.toLowerCase().includes(this.state.searchField.toLowerCase()) 
    ))

    //console.log(filteredElements, ' filtered elements in render function');
    return (
      <div>
        <h2>BenchPrep Simple React List</h2>
        <div className="App">
          <Search  placeholder='Search by theme o quote...' handleChange={(ev) => this.setState({searchField: ev.target.value})}/>
          <ElementsList  elements={filteredElements}/>
        </div>
      </div>
    )
  }
}
