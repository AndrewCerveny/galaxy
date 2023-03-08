const apiDataCall = () =>  {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ba55045bemsh7c87450d2a771b8p155de8jsn591dafeb3f86',
      'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
  };

 return fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
    .then(res => res.json())
    
}
export default apiDataCall;