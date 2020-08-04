import React from 'react';
import { useSpring, animated } from 'react-spring';
import Header from './component/Header';
import Nav from './component/Nav';
import Banner from './component/Banner';

export default function Home() {

  const props = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: {delay: 3000, duration: 2000}
  })

  return (
    <animated.div style={props}>
      <Header />
      <Banner />
      <Nav />
    </animated.div>
  )
}
