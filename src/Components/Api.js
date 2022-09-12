
const ApiCall = () => {
    fetch('https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates', {
        method: 'GET',
        params: {
          cors : "no-cors",
          order_by: 'popularity',
          adults_number: '2',
          units: 'metric',
          room_number: '1',
          checkout_date: '2022-10-01',
          filter_by_currency: 'EUR',
          locale: 'fr',
          checkin_date: '2022-09-30',
          latitude: '43.2803453',
          longitude: '5.3806484',
          children_number: '2',
          children_ages: '5,0',
          categories_filter_ids: 'class::2,class::4,free_cancellation::1',
          page_number: '0',
          include_adjacency: 'true'
        },
        headers: {
          'X-RapidAPI-Key': 'ec9bdfab04mshc24712cabf0667fp1cd634jsn0b7d4e0d57cf',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      }).then(resp => resp.json())
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
}
export default ApiCall