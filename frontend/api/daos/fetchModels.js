import { fetchData } from "../data";

export const entries = () => {
    return fetchData('api/models')
      .then((result) => {
        console.log(result); 
        return Array.isArray(result) ? result : [result].sort(); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        return []; 
      });
};
