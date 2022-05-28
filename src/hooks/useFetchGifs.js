import { useState,useEffect } from "react"
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading : true
    })

    //solo cuando cambia la categoria cambia el useEffect se dispara
    useEffect(() => {
        getGifs( category )
            .then(img => { //el then es una promesa

                // setTimeout(() => {
                    
                    console.log(img);
                    setState({
                        data: img,
                        loading : false
                    });
                // }, 2500);


            });
    }, [category])


  

    return state; // {data:[] loading: true}
}