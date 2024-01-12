
import React, { useState } from 'react'
import classes from './Header.module.scss'
import { Link, Route, Routes } from 'react-router-dom'
import About from '@/pages/About/About'
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Calendar from '@/assets/calendar.svg'
import Image from '@/assets/app-image.svg'
import { App } from '../App'
import { Shop } from '@/pages/Shop'


export const Header = () => {

  const [count, setCount] = useState<number>(10)
  const increment = () => setCount(prev => prev - 1)
  return (
    <div>      <header className={classes.header}>
      <h1 >platform={__PLATFORM__}</h1>
      <div className={classes.container}>
        <div className={classes.AvatarPng_Jpg}>
          <img width={50} className={classes.imgAvatarPng} src={avatarPng} alt="img-png" />
          <img width={100} className={classes.imgAvatarJpg} src={avatarJpg} alt="img-jpg" />

        </div>
        <div className="ImagesSvg">

          <Calendar fill={'green'} width={100} height={100} />
          <Calendar style={{ color: 'orange' }} width={100} height={100} />
          <Image style={{ color: 'orange' }} width={100} height={100} />

        </div>

        <Link to={'/about'}>about</Link>
        <br />
        <Link to={'/shop'}>shop</Link>
        <br />
        <h1>Title</h1>
        <h2>{count}</h2>
        <button className={classes.btn} onClick={increment}>Counter</button>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Shop />} />
        </Routes>
        <About />
      </div>
    </header></div>
  )
}
