import React from "react"
import Cart from "./Cart"
import Games from "./Games"

export default function Homepage(){

    return (
        <>
        <h1 className="pt-3 pb-5">GAMES STORE</h1>
        <Games />
        <Cart />
        </>
    )
}