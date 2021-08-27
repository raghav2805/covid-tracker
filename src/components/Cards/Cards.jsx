import React from 'react'
import styles from "./Cards.module.css";
import CountUp from 'react-countup';
import cx from "classnames";

import {Card, CardContent, Typography, Grid} from "@material-ui/core";

const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate}, country }) => {
    if(!confirmed){
        return "Loading..";
    }

    return (
        <div className={styles.container}>
        <Typography className={styles.text} gutterBottom variant="h4" component="h2">{country}</Typography>
            <Grid container spacing={3} justufy="center">
                <Grid item component={Card} xs={12} md = {3} className = {cx(styles.card , styles.infected)}>
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

                <Grid item component={Card} xs={12} md = {3} className = {cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>        
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

                <Grid item component={Card} xs={12} md = {3} className = {cx(styles.card , styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>         
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