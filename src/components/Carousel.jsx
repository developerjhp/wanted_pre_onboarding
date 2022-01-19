import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as PrevArrow } from '../assets/prevArrow.svg';
import { ReactComponent as NextArrow } from '../assets/nextArrow.svg';
import { carouselData } from '../assets/carouselData';
import Item from './Item';

const TRANSITION_DURTAION = 400;

const Carousel = () => {
  const ref = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);

  const [pos, setPos] = useState(null);

  const addTransition = () => (ref.current.style.transition = `all ${TRANSITION_DURTAION}ms ease`);

  const removeTransition = () => (ref.current.style.transition = '0s');

  const handleMove = (order, screen) => {
    const initialValue = screen > 1200 ? 1060 - (screen - 1060) / 2 : screen * 0.7;
    const itemWidth = screen > 1200 ? 1060 : screen * 0.8;
    const calculated = (initialValue + itemWidth * order) * -1;

    setPos(calculated);
    ref.current.style.transform = `translate3d(${calculated}px, 0px, 0px)`;
  };

  const moveToFirstItem = () => {
    removeTransition();
    return setIndex(0);
  };

  const moveToLastItem = () => {
    removeTransition();
    return setIndex(carouselData.length - 1);
  };

  const onPrevClick = () =>
    setIndex((prev) => {
      if (prev === 0) {
        setTimeout(moveToLastItem, TRANSITION_DURTAION + 1);
      }
      addTransition();
      return prev - 1;
    });

  const onNextClick = () =>
    setIndex((prev) => {
      if (prev === carouselData.length - 1) {
        setTimeout(moveToFirstItem, TRANSITION_DURTAION + 1);
      }
      addTransition();
      return prev + 1;
    });

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => handleMove(index, screenWidth), [index, screenWidth]);

  const [xPos, setXPos] = useState(null);
  const [threshold, setThreshold] = useState(null);

  const onMouseDown = (e) => {
    setXPos(e.clientX);
    setThreshold(e.target.getBoundingClientRect().width / 2);
  };

  const onMouseMove = (e) => {
    if (xPos == null) return;
    const distance = e.clientX - xPos;
    if (distance > threshold || e.clientX > screenWidth - 50) {
      setXPos(null);
      setThreshold(null);
      return onPrevClick();
    }
    if (distance < -threshold || e.clientX < 50) {
      setXPos(null);
      setThreshold(null);
      return onNextClick();
    }
    ref.current.style.transform = `translate3d(${pos + distance}px, 0px, 0px)`;
  };

  const onMouseUp = () => {
    if (xPos == null) return;
    ref.current.style.transform = `translate3d(${pos}px, 0px, 0px)`;
    setXPos(null);
    setThreshold(null);
  };

  return (
    <main className='overflow-hidden p-0 desktop:pt-[25px]'>
      <div className='relative'>
        <div className='inline-flex relative overflow-hidden' ref={ref} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onDragStart={(e) => e.preventDefault()}>
          <Item {...carouselData[carouselData.length - 1]} current={false} />
          {carouselData.map((item) => (
            <Item {...item} key={item.index} current={index === Number(item.index)} />
          ))}
          <Item {...carouselData[0]} current={false} />
        </div>
        <button onClick={onPrevClick} className='arrow_button left_arrow'>
          <span className='w-full center'>
            <PrevArrow width='1em' height='1em' />
          </span>
        </button>
        <button onClick={onNextClick} className='arrow_button right_arrow'>
          <span className='w-full center'>
            <NextArrow width='1em' height='1em' />
          </span>
        </button>
      </div>
    </main>
  );
};

export default Carousel;
