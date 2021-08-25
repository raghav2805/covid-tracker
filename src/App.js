import React from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import {FetchData} from "./api";

class App extends React.Component {

  state = {
    data: {},      //global
  }

  async componentDidMount(){
    const fetcheddata = await FetchData();
    console.log(fetcheddata);
    this.setState( {data : fetcheddata});
  }

  render() {
    //destructuring 
    const {data} = this.state;
    // console.log(this.state.data);

  return (
    <div className={styles.container}>
      <Cards data = {data} />
      <CountryPicker />
      <Chart />
    </div>
  );
  }
}

export default App;
