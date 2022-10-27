import { useEffect, useState } from 'react'
import {
  faAngular,
  faQq,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faAtlas,
  faBlog,
  faBookOpen,
  faCamera,
  faCopyright,
  faFax,
} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="columns columns--about">
          <div className="text-zone text-zone--about">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              A writer is born. Not like an emperor from the blood of an emperor
              or a priest from the blood of a priest. It is born free from the
              will of the societies. It is born to follow the leads of his soul
              with a vision to see the light of truth.
            </p>
            <p align="LEFT">
              It is free from the bondage of religion, policies, politics, and
              the order of the societies but bound by the sole duty of service
              to the living and non-living. Sometime it wages war with its
              mighty pen, and sometimes It unites the world under the blue sky
              with love.
            </p>
            <p>
              A writer is everywhere to see everything as they are. It pen-down
              all the emotions for us, our family, society, our next generation,
              and the generations. A writer is everywhere; in you, in me, in
              them, in air, water, soil, or even in ether. A writer (It) is
              omnipresent.
            </p>
            <p>
              IT is me, a writer. I/we bow in front of you and present me/us at
              your service.
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAtlas} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faBlog} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faBookOpen} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faCamera} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faCopyright} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faFax} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>

        <div className="copy">
          <p> Copyright 2022 &copy; Codeier Technology</p>
          {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
