// TanStack Query data fetching, loading, error, caching, refetching etc easily handle kore..
// TanStack Query , API/server data manage korar joonnp
// ekhn API diye asah DATA gulake Cache korte code likhbo


import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../api/weatherApi'

export function useWeather(city){
    
    // return e useQuery cache korar code likhbo
    return useQuery({
        queryKey: ['weather', city],// kon data ta cach korte chai
        queryFn: () => getWeather(city),//API call ta pass
        enabled: !!city,
        retry: false,

    });

}




// react query kintu continously data fetch korte thake ...kinttai kichu bioundary set korbo
// ex. enable

//jkhn useWeather function k call korbo tkhn useQuery weatherapi.js e getWeather() function 
// API call kore ana Data gula niye Usequery k dibe...
//data set kora,,error set kora,,calling e j time waste hocche loading state e seta manage kora


//j component er moddhe react query k execute kort chai she component gulake queryClientProvider er
// maddhome Wrap korte hobe


// jehetu ami chai amr pura system ta react tanstack query diye chaluk shehetu ami 
// root componenet main.jsx jekahn theke sob compponenet start hoy sekhane tanstack query wrapper k call kore dibo
//mane holo pura system er sob reaact query diye arap kore dilam....

