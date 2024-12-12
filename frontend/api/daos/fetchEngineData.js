import { fetchDataWithId } from "../data";

export const engines = (id) => {
    return fetchDataWithId('api/engines',id)
      .then((result) => {
        console.log(result); 
        return Array.isArray(result) ? result : [result].sort(); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        return []; 
      });
};
