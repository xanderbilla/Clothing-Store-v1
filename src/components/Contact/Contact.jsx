import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import PinterestIcon from '@mui/icons-material/Pinterest'
import './Contact.scss'

const Contact = () => {
  return (
      <div className='contact'>
          <div className="wrapper">
              <span>BE IN TOUCH WITH US</span>
              <div className="main">
                  <input type="text" name="email" placeholder='Enter your e-mail...' />
                  <button>JOIN US</button>
              </div>
              <div className="icons">
                  <FacebookIcon />
                  <GoogleIcon/>
                  <InstagramIcon />
                  <PinterestIcon/>
                  <TwitterIcon/>
              </div>
          </div>
    </div>
  )
}

export default Contact