import { fetchDataWithId } from "../data";

export const variants = (id) => {
    return fetchDataWithId('api/variants',id)
      .then((result) => {
        console.log(result); 
        return Array.isArray(result) ? result : [result].sort(); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        return []; 
      });
};
