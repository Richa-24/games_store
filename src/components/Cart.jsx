import React from "react"

export default function Cart({cartData}){

    console.log(cartData)
    const handleDec=()=>{

    }

    const handleInc=()=>{

    }

    return (
        <div className="cart mt-5">
        {cartData && cartData.map((item)=>(
            <div className="d-flex my-2">
        <div className="col-2"><button type="button" class="btn btn-secondary" onClick={()=>handleInc()}>x</button></div>
        <div className="d-flex col-8">
            <div className="col-4">{item.heading}</div>
            <div className="col-4 px-2">{item.quantity} x {item.price}</div>
            <div className="col-4 px-2">{item.quantity * item.price}</div>
        </div>
        <div className="d-flex justify-content-between col-2">
            <div className="me-4"><button type="button" class="btn btn-secondary" onClick={()=>handleDec()}>-</button></div>
            <div className="ms-2"><button type="button" class="btn btn-secondary" onClick={()=>handleInc()}>+</button></div>
        </div>
        </div>
            ))}
        </div>
    )
}