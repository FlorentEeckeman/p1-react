import axios from "axios";
import {dataActivité} from './dataactivité'


const ApiCallAttraction = (NElong, NElat, SOlong, SOlat) => {

console.log(NElong, NElat, SOlong, SOlat)
/*
const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary',
  params: {
    tr_longitude: NElat,
    tr_latitude: NElong,
    bl_longitude: SOlat,
    bl_latitude: SOlong,
    currency: 'EUR',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': '37e3c0a82fmsh0edad8fce4a5b1bp18d596jsnd5fe35c3fb20',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
const datareturn = async() => {
    try{
     // const responce = await axios.request(options)
      console.log(dataActivité.data)
      return (dataActivité.data)
    }
    catch (error) {
      console.log(error.response.body);
  }
  }

  return datareturn()

}
export default ApiCallAttraction