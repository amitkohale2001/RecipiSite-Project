import React, { useEffect, useState } from 'react'
import Category from './Category'

const Home = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res=>res.json())
    .then(d=>setData(d.meals))
  },[])
  
    return (
    <div className='Home'>
        {
            data.map((item)=>{
                return(
                    <div className='Cards' key={item.idMeal} style={{display: 'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}>
                        <div className='right'>
                        <h1 className='h11'>Today's Special</h1>
                        <h1 style={{color:'orange'}}>{item.strMeal}</h1>
                        <h1>{item.strArea}</h1>
                        </div>
                        <div className='left'>
                            <img src={item.strMealThumb} height={'300px'} width={'300px'} style={{borderRadius:'50%'}} alt="" />
                        </div>
                    </div>
                )
            })
        }

        <Category>
        </Category>
        
    </div>
  )
}

export default Home
