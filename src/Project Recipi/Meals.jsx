import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import ReactPlayer from 'react-player/youtube'

const Meals = () => {
    const location= useLocation()
    const data = location.state.item

    const [datas,setdata] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
        .then(res=>res.json())
        .then(d=>{
            setdata(d.meals)
        })
    },[])
    
  return (
    <div>
      <section className="sec">
            <div className="right">
        <img src={data.strMealThumb} width={'100%'} height={'300px'} style={{borderRadius:'50%'}} />
            </div>
            <div className="left">
                <h1>{data.strMeal}</h1>
            </div>
        </section>
        <br />
        <section className="sec1">
            {
                datas.map((item)=>{
                    return(
                        <aside key={item.idMeal}>
                            <h1>{item.strMeal}</h1>
                            <h1>{item.strCategory}</h1>
                            <h1>{item.strCategory}</h1>
                            <p>{item.strInstructions}</p>
                            <ReactPlayer url={item.strYoutube} width={'100%'} height={'500px'}/>
                            </aside>
                    )
                })
            }

        </section>
    </div>
  )
}

export default Meals
