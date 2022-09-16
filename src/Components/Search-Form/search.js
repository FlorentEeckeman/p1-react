import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // 
import Filter from './filters/filter'
import { useState } from 'react'
import { useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { GetPopularApp } from './SearchFunction'
import ApiCall from './Api'
import ApiCallAttraction from './apiCallAttraction'
import '../../../node_modules/rsuite/styles/index.less'
import ('./search.css')

const  callData =  (element) =>{
    return new Promise((resolve, reject) => {
  fetch('http://localhost:4000/api/products/citydata/'+ element)
  .then((response) => {
      if (!response.ok) {  
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.json();
    }).then((data)=>{
    resolve(data)
    }).catch((error) => {
        reject(error)
    })
})
} 

const Search = ({citySelected, setCitySelected, setCityName, dataRequest, setDataRequest, setPopularApp, setAttractionData}) => {
    const [cityOption, setCityOption] = useState([])
    const [cityValue, setCityValue] = useState()
    const [cityGps, setCityGps] = useState([])

    useEffect(() => {
        dataRequest !== undefined ? (
            setPopularApp(GetPopularApp(dataRequest, dataRequest.map(x =>  x.review_score ), dataRequest.map(x =>  x.review_score )))
        )
        : console.log('pas de requette')
        console.log(citySelected);

    }, [dataRequest, citySelected, setCitySelected, setPopularApp])


    const handleSubmit = (event) => {
        event.preventDefault()
          // ApiCall(cityValue[event.target[0].value], dataRequest, setDataRequest())
          ApiCall(cityValue[event.target[0].value])
          .then((e) => setDataRequest(e))
          .then(() => setCityName(event.target[0].value))
          .then(() => dataRequest)
          .then(() =>setCitySelected(true))

          ApiCallAttraction(parseInt(cityGps[0])/1000000+0.124, parseInt(cityGps[1])/1000000+0.1583, (parseInt(cityGps[0])/1000000-0.124), (parseInt(cityGps[1])/1000000-0.1583))
            .then((e) => setAttractionData(e))
      }

    return (
    <div className='search'>
        <div>
            <h2>Trouvez votre hébergment pour des vacances de rêve</h2>
            <h4>En plein centre vitre ou en pleine nature</h4>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='formDot'>
            <FontAwesomeIcon icon={solid('location-dot')} />
            </div>
            <div className='formInput'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    renderOption={(props, option) => {
                       return (
                          <li {...props} key={props + option.dest_id} >
                            {option.name}
                          </li>
                        );
                    }}
                    getOptionLabel={option => option.name}
                    autoHighlight= {true}
                    options= {cityOption}
                    limitTags={10}
                    sx={{ width: 300 }}
                    renderInput={(params) => 
                    <TextField {...params} label="City"
                    
                    onChange={(e) =>{
                        async function f2 (r){
                        let cityData = await callData(r.target.value)
                        let cityName =[]
                        let cityId =[]
                        let citycoordonate =[]
                        cityData.map(y => cityName.push(y.name))
                        cityData.map(y => cityId.push(y.dest_id))
                        cityData.map(y => citycoordonate.push(y.latitude*1000000, y.longitude*1000000))
                        let res = {}
                        cityName.forEach((key, i) => res[key] = cityId[i])
                        setCityValue(res)
                        setCityOption(cityData)
                        setCityGps(citycoordonate)
                    }
                       f2(e)
                    }}
                    onSelect={()=> {
                        setCityOption([])}
                    }
                    />}
                    />
            </div>
            <div className='formButton'>
                <button type='Submit'>Recherche</button>
            </div>
        </form>
            <Filter></Filter>
            <div className='searchLastLine'>
                <div className='infoBublle'>
                <FontAwesomeIcon icon={solid('info')} />
                </div>
                <p>Plus de 500 logements sont disponibles dans cette ville</p>
            </div>
    </div>
    )
}

export default Search