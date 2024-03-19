import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
// import './Sp.css'
const Sp = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state.item

    const [datas,setdata] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`)
        .then(res=>res.json())
        .then(d=>{
            setdata(d.meals)
        })
    },[])

    return (
    <div className="Spc" style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
        <section className="sec">
            <div className="right">
        <img src={data.strCategoryThumb} width={'300px'} height={'300px'} style={{borderRadius:'50%'}}  />
            </div>
            <div className="left">
                <h1>{data.strCategory}</h1>
                <p>{data.strCategoryDescription}</p>
            </div>
        </section>
        <br />
        <section className="sec1" style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between", gap:'10px'}}>
            {
                datas.map((item)=>{
                    return(
                        <div key={item.idMeal} className="secdiv" >
                            <img  style={{borderRadius:'50%'}} onClick={()=>navigate('/Meals',{state:{item}})} src={item.strMealThumb}  height={'200px'} width={'200px'} alt="" />
                            <p>{item.strMeal}</p>
                        </div>
                    )
                })
            }

        </section>
      
    </div>
  )
}

export default Sp
