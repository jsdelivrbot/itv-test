import Axios from 'axios';

const ROOT_URL = 'http://discovery.hubsvc.itv.com/platform/itvonline/ctv/programmes?';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchCategory(categories){

  const url = `${ROOT_URL}category=${categories}&broadcaster=itv&features=hls,aes`;

  const request = Axios.get(url,{
    headers: {'Accept': 'application/vnd.itv.hubsvc.programme.v3+hal+json; charset=UTF-8'}
  });
  return{
    type: FETCH_DATA,
    payload: request
  };
}
