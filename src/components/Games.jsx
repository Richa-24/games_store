import React,{useState} from "react"
import data from "../utils/games.json"

export default function Games(){

    const [id,setId]=useState()
    const [isAdded,setIsAdded]=useState(false)
    const [cart,setCart]=useState([])

    console.log(data)

    const handleClick=(item)=>{
        setIsAdded(true)
        setId(item.id)
        setCart([...cart,item])

        // const element=document.getElementById(id)
        // console.log(element)
    }

    const handleDec=()=>{

    }

    const handleInc=()=>{

    }

    console.log(cart)
    return (
        <>
        <div className="d-flex flex-wrap container"
        //  style={{border: "1px solid red"}}
         >
         {data && data.map((item)=>(
             <div key={item.id} className="heading col-6 d-flex justify-content-between py-2 px-5"> 
                 <div className="">
                 <div className="py-1">{item.heading}</div>
                 <div>{item.subHeading}</div>
                 </div>
                 
                 <div>
                 <div>$ {item.price}</div>
                 {isAdded && id == item.id ? 
                 <div className="d-flex justify-content-between">
                 <div className="me-4"><button type="button" id={item.id} class="btn btn-secondary" onClick={()=>handleDec(item.id)}>-</button></div>
                 <div className="ms-2"><button type="button" id={item.id} class="btn btn-secondary" onClick={()=>handleInc(item.id)}>+</button></div>
                </div>
                 :
                 <div><button type="button" id={item.id} class="btn btn-secondary" onClick={()=>handleClick(item)}>Add to Cart</button></div>
                    }
                 </div>
             </div>
         ))}
         </div>
        </>
    )
}