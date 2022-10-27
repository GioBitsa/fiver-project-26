import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef ()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    // console.log(form.current)

    emailjs
      // .sendForm('Test_drRajni','template_cq61jqq', form.current, 'PGNcNoctNSweUDuy7')
      .sendForm('gmail','template_cq61jqq', refForm.current, 'PGNcNoctNSweUDuy7')
      .then(
        () => {
          alert('Message successfully sent!')
          // window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container container--contact contact-page">
        <div className="columns columns--contact">
          <div className="text-zone text-zone--contact">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am a screen play & Dialouge writer for movies ( of all duration
              & genre). However I aso write episodes for web series. Kindly
              contact me for more details on +91 9769360631 or don't hesitate to
              contact me using below form either.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>

                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>

                  <li style={{ textAlign: 'end' }}>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>

          <div className="map-wrap">
            <div className="info-map">
              Abhiman Niimain,
              <br />
              Malad(W),Mumbai
              <br />
              India <br />
              <br />
              <span>abhimanniimain9@gmail.com</span>
            </div>
            <MapContainer center={[19.1874, 72.8484]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[19.1874, 72.8484]}>
                <Popup>
                  Abhiman lives here, come over for a cup of coffee :)
                </Popup>
              </Marker>
            </MapContainer>
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

export default Contact
