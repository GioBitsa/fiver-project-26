import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/bro_.jpeg'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'B', 'H', 'I', 'M', 'A', 'N']
  const jobArray = [
    ' ',
    'A',
    ' ',
    'S',
    'T',
    'O',
    'R',
    'Y',
    ' ',
    'W',
    'E',
    'A',
    'V',
    'E',
    'R',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="columns">
          <div className="text-zone">
            <h1>
              {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'M</span> */}
              <span className={`${letterClass} _15`}></span>
              {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
              {/* <img src="../../assets/images/bro_.jpeg"/> */}

              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={20}
              />
            </h1>
            <h2>Writers for short films and web series</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div>
        {/* Above line put a logo on the home screen */}
        {/* <img src="../../assets/images/bro_.jpeg" alt="Snow" style="width:100%"/> */}
        <div className="copy">
          <p> Copyright 2022 &copy; Codeier Technology</p>
          {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
