import './App.css';
import Header from './header';
import Search from './Search-Form/search';
import Activity from './activity';
import { useState } from 'react'
import Appart from './Appart/appart';

function App() {
  const [citySelected, setCitySelected] = useState(false)
  const [cityName, setCityName] = useState({})
  const [dataRequest, setDataRequest] = useState()
  const [popularApp , setPopularApp] = useState()
  const [attractionData , setAttractionData] = useState()

  return (
    <div className="App">
      <Header></Header>
      <Search citySelected={citySelected} setCitySelected={setCitySelected} setCityName={setCityName} dataRequest={dataRequest} setDataRequest={setDataRequest} setPopularApp={setPopularApp} setAttractionData={setAttractionData} ></Search>
      
      <Appart cityName={cityName} dataRequest={dataRequest} citySelected={citySelected} popularApp={popularApp} attractionData={attractionData}>
      </Appart>
      <Activity cityName={cityName} attractionData={attractionData}></Activity>
    </div>
  );
}

export default App;
