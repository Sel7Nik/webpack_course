import React
  from 'react'
import { Header } from './header/Header'


function TODO(a: number) {
  a++
  console.log('message TODO function')
}



export const App = () => {

  TODO(51235);

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>
  // }

  // if (__ENV__ === 'development') {
  //   // addDevtools()
  // }

  return (
    <div>
      <Header />
    </div>
  )
}
