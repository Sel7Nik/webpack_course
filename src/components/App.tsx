import React, { useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import About from '@/pages/About/About'

export const App = () => {

  const [count, setCount] = useState<number>(10)

  const increment = () => setCount(prev => prev - 1)
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.container}>
          <Link to={'/about'}>about</Link>
          <br />
          <Link to={'/shop'}>shop</Link>
          <br />
          <h1>Title</h1>
          <h2>{count}</h2>
          <button className={classes.btn} onClick={increment}>Counter</button>
          {/* <Outlet /> */}
          <About />
        </div>
      </header>
    </div>
  )
}
