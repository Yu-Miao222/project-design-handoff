/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactSimplyCarousel from 'react-simply-carousel';

import Johan from '../images/Johan.jpg'
import Emelie from '../images/Emelie.jpg'
import Ewa from '../images/Ewa.jpg'

const reviews = [
  {
    id: 1,
    name: 'Johan',
    image: Johan,
    review: ' "Meditation helps me to handle stressful situations in everyday life." '
  },
  {
    id: 2,
    name: 'Emelie',
    image: Emelie,
    review: ' "Yoga is part of the journey to find inner peace and to live in the moment." '
  },
  {
    id: 3,
    name: 'Ewa',
    image: Ewa,
    review: ' "Yogistudio has helped me to become better at living in the present." '
  }
];

export const ReviewSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <ReviewSection>
      <ReviewHeader>What Our Yogis Say About Us</ReviewHeader>
      <CarouselContainer>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              maxWidth: 767,
              disableNavIfAllVisible: false,
              hideNavIfAllVisible: true,
              width: '100%',
              justifyItems: 'center',
              display: 'flex',
              infinite: true,
              flexWrap: 'no-wrap'
            },
            {
              itemsToShow: 3,
              itemsToScroll: 1,
              minWidth: 768,
              disableNavIfAllVisible: false,
              hideNavIfAllVisible: true,
              width: '100%',
              justifyItems: 'space-evenly',
              display: 'flex',
              infinite: true,
              flexWrap: 'no-wrap'
            }
          ]}
          speed={400}
          easing="linear">
          {/* here you can also pass any other element attributes.
         Also, you can use your custom components as slides */}
          {reviews.map((slider) => (
            <ReviewList>
              <ReviewContainer key={slider.id}>
                <img src={slider.image} alt={slider.name} />
                <h2>{slider.name}</h2>
                <p>{slider.review}</p>
              </ReviewContainer>
            </ReviewList>
          ))}
        </ReactSimplyCarousel>
      </CarouselContainer>
      <ButtonContainer>
        <ButtonWrapper onClick={() => setActiveSlideIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)}>
          <ButtonIcon>{'<'}</ButtonIcon>
        </ButtonWrapper>

        <ButtonWrapper onClick={() => setActiveSlideIndex((prevIndex) => (prevIndex + 1) % reviews.length)}>
          <ButtonIcon>{'>'}</ButtonIcon>
        </ButtonWrapper>
      </ButtonContainer>
    </ReviewSection>
  );
};

export const ReviewSection = styled.section`
display: flex;
flex-direction: column;
height: auto;
background: #EBEBEB;
`

export const ReviewHeader = styled.h1`
font-weight: 600;
font-size: 28px;
text-align: center;
color: #025323;
`

export const CarouselContainer = styled.div`
display: flex;
align-items: center;
overflow: hidden;
justify-content: space-evenly;
flex-direction: wrap;
`
export const ReviewList = styled.section`
display: flex;
justify-content: space-evenly;
padding: 20px;
`

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #F4F4F4;
  box-shadow: 0px 0px 14.5722px rgba(203, 203, 203, 0.25);
  border-radius: 21.2852px;
  width: 269px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  img {
    width: 83.05px;
    height: 83.05px;
    left: 431.03px;
    top: 39.38px;
    border-radius: 50%;
    object-fit: cover;
    padding: 20px;
  }
  h2 {
    font-size: 24px;
    margin-top: 15px;
  }
  p {
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonWrapper = styled.button`
  background-color: white;
  border: 1px solid #025323;
  border-radius: 50%;
  color: #025323;
  cursor: pointer;
  font-size: 20px;
  height: 35px;
  line-height: 1;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  width: 35px;
`;

const ButtonIcon = styled.span``;