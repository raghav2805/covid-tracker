import React from 'react';
import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import {FetchData} from "./api";

class App extends React.Component {

  state = {
    data: {},      //global
    country : "Global",
  }

  async componentDidMount(){
    const fetcheddata = await FetchData();
    // console.log(fetcheddata);
    this.setState( {data : fetcheddata});
  }

  handleCountries = async (country) => {
    let fetcheddata;
    if(country != "Global")
       fetcheddata = await FetchData(country);
    else{
       fetcheddata = await FetchData();
    }
    
    console.log(fetcheddata);
    this.setState({data : fetcheddata , country : country});
  }

  render() {
    const {data , country} = this.state;

  return (
    <div className={styles.container}>
      <img className={styles.image} src="images/image.png" alt="Covid-19" />
      <Cards data = {data} country = {country}/>
      <CountryPicker handleCountries = {this.handleCountries}/>
      <Chart data = {data} country = {country}/>
    </div>
  );
  }
}

export default App;
