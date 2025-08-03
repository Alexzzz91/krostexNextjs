'use client';
import styles from './Hero.module.css';
import { useLayoutEffect, useState } from 'react';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function ClientBackground() {
  const imageNumber = getRandomInt(1, 3)
  
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const { matches } = window.matchMedia("(max-width: 700px)")
    setIsClient(true)
    setIsMobile(matches)
  }, [])

  let imageBackground = isClient ? styles.overlay_1 : ''
  if (isClient) {
    if (imageNumber === 1) {
      imageBackground = isMobile ? styles.overlay_mobile_1 : styles.overlay_1
    } else if (imageNumber === 2) {
      imageBackground = isMobile ? styles.overlay_mobile_2 : styles.overlay_2
    } else if (imageNumber === 3) {
      imageBackground = isMobile ? styles.overlay_mobile_3 : styles.overlay_3
    }
  }

  return (
    <div className={`${styles.overlay} ${imageBackground}`}></div>
  );
}