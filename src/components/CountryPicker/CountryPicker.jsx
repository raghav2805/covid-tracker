import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api"

function CountryPicker({ handleCountries }) {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.container}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountries(e.target.value)}>
                <option value="Global">Global</option>
                {fetchedCountries.map((country, ind) => (
                    <option key={ind} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
