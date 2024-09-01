import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { Container,Row,Col } from 'react-bootstrap'
import '../Components/About.css'
const About = () => {
  return (
    <div>
     <div className='he1'>
     <Header/>
     </div>
    
      <div className='content'>
        <Container>
          <Row className='mt-4'>
            <Col><h3>Welcome to DreamCatcher,</h3></Col>
          
          </Row>
          <Row>
            <Col>At DreamCatcher, we believe every event should be a reflection of your dreams, meticulously crafted to create unforgettable memories. Whether it's the joyous celebration of a wedding, the excitement of an engagement, the fun of a birthday party, or the vibrancy of a college event, we are here to bring your vision to life.</Col>
          </Row>
          <Row className='mt-4'>
            <h3>Our Mission:</h3>
            <p>Our mission is simple: to turn your dreams into reality. We are dedicated to planning and executing events that are not only beautiful and unique but also stress-free and enjoyable for you.</p>
          </Row>
          <Row>
            <h3>Our Services:</h3>
            <p><span className='ser'>Weddings:</span> From intimate ceremonies to grand receptions, we ensure every detail of your big day is perfect.<br/>
                <span className='ser'>Engagements:</span> Celebrate your love with a memorable engagement event tailored to your style and preferences.<br/>
                <span  className='ser'>Birthday Parties:</span> Whether it’s a themed party for kids or an elegant celebration for adults, we’ve got you covered.<br/>
                <span  className='ser'>College Events:</span> From fests to farewell parties, we bring creativity and energy to every campus event.<br/>

                <span  className='ser'>Conferences:</span> From corporate meetings to large-scale conferences, we provide professional event management to ensure smooth and successful gatherings.<br/>
                <span  className='ser'>Bachelor Parties:</span> Celebrate your last night of freedom with an unforgettable bachelor party, tailored to your preferences and style.<br/>
                <span  className='ser'>Opening Ceremonies:</span> Whether it’s a new business, product launch, or cultural event, we create impressive opening ceremonies that leave a lasting impact.</p>
          </Row>
          <Row>
            <h3>Why choose DreamCatcher?</h3>
              <p>
                <span className='ser'>Expert Team: </span>Our team of experienced planners, designers, and coordinators work tirelessly to ensure your event is flawless.
              </p>
              <p>
                <span className='ser'>Personalized Experience: </span> We believe in a personal approach, understanding your unique requirements to create events that truly reflect your personality.
              </p>
              <p>
                <span className='ser'>Stress-Free Planning: </span>We handle all the details, so you can relax and enjoy the moments that matter.
              </p>
          </Row>
          <Row>
            <h3>Our Story</h3>
            <p>DreamCatcher was born out of a passion for creating magical moments. we have grown into a trusted name in event management, known for our creativity, dedication, and excellence.Every event we handle is a new opportunity to push the boundaries of what’s possible, and to create something truly unique and memorable. Whether you’re planning a wedding, a corporate event, or a festive celebration, DreamCatcher is here to make your vision a reality.</p>
          </Row>
          <Row>
            <h3>Testimonials</h3>
            <p>"DreamCatcher made our wedding day the most magical experience.<br/> Everything was perfect, and we couldn't have asked for more!" -RakeshKumar</p>
            <p>"The team at DreamCatcher planned our college fest,<br/> and it was the best event our campus has ever seen!" -Kathirvel</p>
            <p>"DreamCatcher exceeded our expectations for our company’s annual conference. <br/>The attention to detail and professional execution made the event a huge success."-ManojKumar</p>
            <p>"Our bachelor party was beyond epic, thanks to the DreamCatcher team.<br/> Every moment was perfectly planned, and we had the time of our lives!"-Adithya</p>
          </Row>
          <Row>
            <h3>Connect With Us</h3>
            <p>We would love to hear from you and help bring your dream event to life. Reach out to us via phone, email, or connect with us on Instagram and Facebook for more updates and inspiration.</p>
          </Row>
          <Row>
            <div> <a href="tel:+1234567890">
        <FontAwesomeIcon icon={faPhone} size="1x" style={{ margin: '10px' }} />
         </a>
         
         <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="1x" style={{ margin: '10px' }} />
      </a>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="1x" style={{ margin: '10px' }} />
      </a>
      <a href="mailto:youremail@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ margin: '10px' }} />
      </a></div>
         
          </Row>
        </Container>
      </div>
       
        
    </div>
  )
}

export default About
