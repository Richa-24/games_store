import React, {useState} from "react"
import Cart from "./Cart"
import Games from "./Games"

export default function Homepage(){
    const [cartData,setCartData]=useState()

    const handleCart=(data)=>{
        setCartData(data)
    }
    return (
        <>
        <h1 className="pt-3 pb-5">GAMES STORE</h1>
        <Games handleCart={handleCart}/>
        <Cart cartData={cartData}/>
        </>
    )
}