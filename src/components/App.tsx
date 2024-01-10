import React, { useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import About from '@/pages/About/About'
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Calendar from '@/assets/calendar.svg'
import Image from '@/assets/app-image.svg'


export const App = () => {

  const [count, setCount] = useState<number>(10)

  const increment = () => setCount(prev => prev - 1)
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.container}>
          <div className="AvatarPng_Jpg">
            <img width={50} className="imgAvatarPng" src={avatarPng} alt="img-png" />
            <img width={100} className="imgAvatarJpg" src={avatarJpg} alt="img-jpg" />

          </div>
          <div className="ImagesSvg">

            <Calendar fill={'red'} width={100} height={100} />
            <Image style={{ color: 'orange' }} width={100} height={100} />

          </div>

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
