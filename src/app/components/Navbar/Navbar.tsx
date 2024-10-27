import React from 'react'
import style from "./Navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={style.container}>

        <h1 className={style.heading}>navbar</h1>
            
         




         
            <button><Link href="/contact">contact us</Link></button>
            <br></br>


            <button><Link href="/about">about us</Link> </button>
            </div>
            
            
    
  )
}

export default Navbar