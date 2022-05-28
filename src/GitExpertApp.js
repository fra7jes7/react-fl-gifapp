import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories,setCategories] = useState(['futurama']);

    // const handleAdd = ()=>{
    //     // setCategories(['HunterXhunter', ...categories]);
    //     setCategories (cats => [...cats,'henterXhunter'])
    // }

    return (
        <div>
            <h2>GitExpertApp</h2>
            <hr></hr>

            <AddCategory setCategories = {setCategories}/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    //categories.map( (category,i)=>{ i--> es la clave unica
                    categories.map( (category)=>(
                        <GifGrid 
                        key={category}
                        category={category}/>
                    )) 
                }
            </ol>

        </div>
    )
}
