import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Activity = ({cityName, attractionData}) =>{
    const testUrl = () => {
        console.log(attractionData) 
    }
    testUrl()
   let city = cityName.toString()

    return attractionData !== undefined ? (
        <Box sx={{ flexGrow: 2 }}>
            <Grid container sm={7} spacing={0}>
                        <Grid item xs={12}> 
                            <h2>Activité à {city}</h2> 
                        </Grid>
                    <Grid container xs={12} spacing={2}>
                        {attractionData.map((value, index) =>  
                        {  console.log(cityName)
                             return value.photo !==undefined  && value.name !== undefined && index <6?  (
                            <Grid item xs={4}>
                                <div className="standardMotelImg" style={{ backgroundImage: `url(${value.photo.images.large.url})` }}></div>
                                <h4 className="standardMotelName">{value.name}</h4>
                            </Grid>
                            ) : null }
                        )}
                    </Grid>
            </Grid>
        </Box>
    ) : null
}

export default Activity