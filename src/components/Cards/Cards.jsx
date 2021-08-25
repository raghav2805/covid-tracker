import React from 'react'
import styles from "./Cards.module.css";
import CountUp from 'react-countup';

import {Card, CardContent, Typography, Grid} from "@material-ui/core";

const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate}  }) => {
    // console.log(props);
    if(!confirmed){
        return "loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justufy="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>         {/*gutterBottom => padding-bottom */}
                        <Typography variant="h5">
                            <CountUp
                            
                                start = {0}
                                end ={`${confirmed.value}`}
                                seperator = ","
                                duration = {2.5}
                            />
                        </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2" >Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>         {/*gutterBottom => padding-bottom */}
                        <Typography variant="h5">
                            <CountUp
                            
                                start = {0}
                                end ={`${recovered.value}`}
                                seperator = ","
                                duration = {2.5}
                            />
                        </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2" >Number of recovered people from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>         {/*gutterBottom => padding-bottom */}
                        <Typography variant="h5">
                            <CountUp
                            
                                start = {0}
                                end ={`${deaths.value}`}
                                seperator = ","
                                duration = {2.5}
                            />
                        </Typography>
                        <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2" >Losses due to Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;