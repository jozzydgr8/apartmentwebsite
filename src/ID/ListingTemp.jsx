import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import List from '../component/ListingTemp'
import { UseContextData } from '../ContextFolder/Context/UseContextData';
import { useState } from 'react';

function ListingTemp() {
   const [temp, setTemp] = useState(null)
    const{id} = useParams();
    const {data} = UseContextData();
    useEffect(()=>{
        const template = data && data.filter(item => {
            return item.id === id
            // Check if any key in `item` matches `id` exactly
            // return Object.values(item).includes(id);
        });

        template && template.length > 0 && setTemp(template)
        
    },[data])
    if(!temp){
        return <span>cant find file</span>
    }
   // console.log('temp',temp)
  return (
    <section id='list'>
        <div className='container-fluid'>
        {
            temp.map((item)=>(
                <List data={item} key={item.id} length={temp.length}/>
            ))
        }
           
        </div>
    </section>
  )
}

export default ListingTemp
