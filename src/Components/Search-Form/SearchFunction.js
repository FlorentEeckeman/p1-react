
const GetSubstringIndex = (array, substring) => {
    var indexes = [], i;
    for(i = 0; i < array.length; i++)
        if (array[i] === substring)
            indexes.push(i);
    return indexes;
}

const GetOccurenceCounter = (array, value) => {

let counter = 0;
for (let studentAge of array) {
    //console.log(studentAge)
  if (studentAge === value) {
    counter++;
    }
}
return counter
}
const GetPopularApp = (response, data, cityresult)  =>{
    let index = []
  let resIndex =[]
    data.sort((a, b) => b - a);
    for(let x =0; x<3; x++){
      index.push(GetSubstringIndex(cityresult, data[x] , GetOccurenceCounter(data, data[x])))
    }
    data[0] === data[1] && data[1] === data[2] ? resIndex = index.flat().slice(0,3) : console.log(resIndex)
    data[0] === data[1] && data[1] !== data[2] ? resIndex = index.flat().slice(2) : console.log(resIndex)
    data[0] !== data[1] && data[1] === data[2] ? resIndex = index.flat().slice(0,3) : console.log(resIndex)
    data[0] !== data[1] && data[1] !== data[2] ? resIndex = index.flat().slice(0,3) : console.log(resIndex)
  
   return(resIndex.map(x => response[x]))
  
}
 const AppartData = (index) => {
  
 }

export { GetOccurenceCounter, GetSubstringIndex, GetPopularApp, AppartData}