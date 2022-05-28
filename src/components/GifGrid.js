import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const {data, loading} = useFetchGifs(category);

    console.log(loading)
    // console.log(data)

    // const [images, setImages] = useState([]);

    // //se ejecuta la siguiente instruccion cuando el componente es 
    // // renderizado por primera vez
    // useEffect(() => {
    //     getGifs( category )
    //         .then(img => setImages(img));
    // }, [category])

    

    return (
        <>
            <h3>{category}</h3>

            { loading && <p>Loading</p> }

            <div className='card-grid'>


                {
                    //return implicito
                    // <li key={img.id} >{img.title}</li> --con un lista
                    //img = {img} --enviar argumento
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))

                }

            </div>
        </>
    )
}
