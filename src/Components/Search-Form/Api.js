import { dataAppart } from "./dataAppart";

const ApiCall = (city) => {
/*
  const axios = require("axios");
  console.log(city)

    const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
  params: {
    checkout_date: '2022-10-01',
    units: 'metric',
    dest_id: city,
    dest_type: 'city',
    locale: 'fr',
    adults_number: '2',
    order_by: 'popularity',
    filter_by_currency: 'EUR',
    checkin_date: '2022-09-30',
    room_number: '1',
    children_number: '2',
    page_number: '0',
    children_ages: '5,0',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1',
    include_adjacency: 'true'
  },
  headers: {
    'X-RapidAPI-Key': '37e3c0a82fmsh0edad8fce4a5b1bp18d596jsnd5fe35c3fb20',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};*/
 const datareturn = async() => {
  try{
   // const responce = await axios.request(options)
    //return responce.data.result
    return (dataAppart)
  }
  catch (error) {
    console.log(error.response.body);
}
}
return datareturn()

}
export default ApiCall