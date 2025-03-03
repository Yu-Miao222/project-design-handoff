import React from 'react';
import styled from 'styled-components';
import GreenBottom from '../images/GreenBottom.png'
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import LinkedIn from '../images/Linkedin.png'

const FooterWrapper = styled.div`
background-color: #EBEBEB;
width: auto;
height: auto;
object-fit: cover;
background-image: url(${GreenBottom});
background-size: 100% 100%; /* Update this line */
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4em;
position: relative;
@media (max-width: 768px) {
  padding: 2em;
}
@media (max-width: 480px) {
  padding: 1em;
}
`;

const IconsSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15.53px;
  padding-top:2em;
  @media (max-width: 768px) {
    margin-top: 2em; 
  }
  @media (max-width: 480px) {
    margin-top: 1em; 
  }
`;

const FacebookLogo = styled.img`
  max-width: 100%;
  
  &:hover path {
   
    opacity: 0.8; 
}
`;

const InstagramLogo = styled.img`
  max-width: 100%;
  
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const LinkedInLogo = styled.img`
  max-width: 100%;
  
  &:hover {
    opacity: 0.8;
    cursor: pointer;
}
`;

const SubscribeText = styled.h5`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding: 0;
  margin: 0;
  color: #FFFFFF;
  margin-top: 1em;
`;

const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 7.83486px;
  line-height: 9px;
  height:18px;
  border: none;
`;

const SubscribeButton = styled.button`
  font-family: 'Libre Franklin';
  font-style: normal;
  background-color: #grey;
  color: #65775A;
  font-size: 7.83486px;
  font-weight: 500;
  line-height: 9px;
  border: none;
  cursor: pointer;
  height:20px;
`;

const GreenBottomOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <GreenBottomOverlay />
      <IconsSection>
        <FacebookLogo src={Facebook} alt="Facebook Logo" />
        <InstagramLogo src={Instagram} alt="Instagram Logo" />
        <LinkedInLogo src={LinkedIn} alt="LinkedIn Logo" />
      </IconsSection>
      <SubscribeText>
        <h5>Subscribe to get latest updates</h5>
      </SubscribeText>
      <EmailInputWrapper>
        <EmailInput
          type="email"
          placeholder="Your email adress"
          required />
        <SubscribeButton
          type="submit">
              Subscribe
        </SubscribeButton>
      </EmailInputWrapper>
    </FooterWrapper>
  );
};