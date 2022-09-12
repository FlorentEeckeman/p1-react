import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // 
import Filter from './filters/filter'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import '../../../node_modules/rsuite/styles/index.less'
import ('./search.css')

const Search = () => {
    const [city, updateCity] = useState(['test', 'Toulouse'])


    return (
    <div className='search'>
        <div>
            <h2>Trouvez votre hébergment pour des vacances de rêve</h2>
            <h4>En plein centre vitre ou en pleine nature</h4>
        </div>
        <form>
            <div className='formDot'>
            <FontAwesomeIcon icon={solid('location-dot')} />
            </div>
            <div className='formInput'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options= {city}
                    sx={{ width: 300 }}
                    renderInput={(params) => 
                    <TextField {...params} label="Movie" 
                    onChange={(e) =>{console.log(callData(e.target.value))}}
                    />}
                    />
            </div>
            <div className='formButton'>
                <button >Recherche</button>
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

const  callData =  (element) =>{
      console.log(typeof element);
    fetch('http://localhost:4000/api/products/citydata/'+ element)
    .then((response) => {
        if (!response.ok) {
           
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();
      }).then((data)=>{
        console.log(Object.values(data));
        return  data
      }).catch((error) => {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(`Error: ${error.message}`));
    
      })
      
} 

export default Search