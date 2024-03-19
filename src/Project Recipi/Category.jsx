import { useEffect, useState } from "react"
import './Category.css'
import { useNavigate } from "react-router-dom"

const Category = () => {
    const[cat,setCat]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(d=>setCat(d.categories))
    },[])
  return (
    <div className="category">
        <h1>Category</h1>
        <section className="sec">
            {
                cat.map((item)=>{
                    return(
                        <div className="cards" key={item.idCategory}>
                            <img onClick={()=>navigate('/Sp',{state:{item}})} src={item.strCategoryThumb} width={'250px'} height={'250px'} style={{borderRadius:'50%'}} alt="" />
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Category
    