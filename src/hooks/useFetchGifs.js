import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

     useEffect( () => { //Al pasarle como argumento category, se ejecuta cada vez que cambie la category
        getGifs(category)
            .then( imgs => {
                
                console.log(imgs);
                    
                setState({
                    data: imgs,
                    loading: false
                });

                
                
            })
     }, [ category ])

    

    return state; // { data: [] , loading: true};

}