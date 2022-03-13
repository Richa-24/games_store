import React from "react"

export default function Cart(){

    const handleDec=()=>{

    }

    const handleInc=()=>{

    }

    return (
        <div className="heading container pt-5 justify-content-between px-5 col-6">
        <div><button type="button" class="btn btn-secondary" onClick={()=>handleInc()}>x</button></div>
        <div>abdjsdsjdsjjh</div>
        <div>6 x 82738273</div>
        <div>2323232323</div>
        <div className="d-flex justify-content-between">
            <div className="me-4"><button type="button" class="btn btn-secondary" onClick={()=>handleDec()}>-</button></div>
            <div className="ms-2"><button type="button" class="btn btn-secondary" onClick={()=>handleInc()}>+</button></div>
        </div>
        </div>
    )
}