import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './appart.css'

const Appart =({cityName, dataRequest, citySelected, popularApp}) =>{
    dataRequest !== undefined ? console.log(dataRequest) : console.log('pas de requette')
   // let dataRes = dataRequest
    const getDataResScale= (data, index) => {
        return data.slice(index, index+6)
    }

    console.log(citySelected);
    return dataRequest!==undefined && popularApp !== undefined ? (
        <div>
            <Box sx={{ flexGrow: 2 }}>
                <Grid container sm={12} spacing={2}>
                    <Grid container sm={7} spacing={0}>
                        { cityName!==undefined ? 
                            <Grid item xs={12}> 
                                <h2>Hébergement à {cityName+""}</h2> 
                            </Grid>
                            : null
                        }
                        <Grid container xs={12} spacing={2}>
                            {getDataResScale(dataRequest, 0).map((value, index) => 
                            { return  (
                                <Grid item xs={4}>
                                    <div className="standardMotelImg" style={{ backgroundImage: `url(${value.max_1440_photo_url})` }}></div>
                                    <h4 className="standardMotelName">{value.hotel_name}</h4>
                                    <p className="standardMotelPrice">Nuit à partir de {value.min_total_price}€</p>
                                    <p className="standardMotelScore">note {value.review_score}</p>
                                </Grid>
                            )}
                            )}
                        </Grid>
                    </Grid>
                    <Grid container sm={5} spacing={2}>
                    <Grid item xs={12}> 
                        { popularApp !==undefined ?  
                                <h2>les plus Populaires</h2>       
                            : null
                        }
                        <Grid container xs={12} spacing={2}>
                            {getDataResScale(popularApp, 0).map((value, index) => 
                            { return  (
                                <Grid item xs={5}>
                                    <div className="standardMotelImg" style={{ backgroundImage: `url(${value.max_1440_photo_url})` }}></div>
                                    <Grid container xs={7} spacing={2} direction='row'>
                                        <Grid item xs={12}>
                                            <h4 className="standardMotelName">{value.hotel_name}</h4>
                                            <p className="standardMotelPrice">Nuit à partir de {value.min_total_price}€</p>
                                            <p className="standardMotelScore">note {value.review_score}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                            )}
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    ) : null
}

export default Appart