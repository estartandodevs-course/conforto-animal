import { useState, useEffect } from 'react';

const breakpoints = {
  small: '(max-width: 768px) and (max-width: 1023px)',
  medium: '(min-width: 540px) and (max-width: 1023px)',
  large: '(min-width: 1024px)'
}

export function useMedia(query) {
  const [isSmall, setSmall] = useState(window.matchMedia(breakpoints.small).matches)
  const [isMedium, setMedium] = useState(window.matchMedia(breakpoints.medium).matches)
  const [isLarge, setLarge] = useState(window.matchMedia(breakpoints.large).matches)
 
  // Activity normally for componentDidMount + componentDidUpdate
  useEffect(() => {
   const small = window.matchMedia(breakpoints.small);
   const medium = window.matchMedia(breakpoints.medium);
   const large = window.matchMedia(breakpoints.large);


   if (small.matches !== small) {
     setSmall(small.matches);
   }

   if (medium.matches !== medium) {
    setMedium(medium.matches);
  }

  if (large.matches !== large) {
    setLarge(large.matches);
  }

   const listenerSmall = () => setSmall(small.matches);
   const listenerMedium = () => setMedium(medium.matches);
   const listenerLarge = () => setLarge(large.matches);

   small.addListener(listenerSmall);
   medium.addListener(listenerMedium);
   large.addListener(listenerLarge);

   return () =>{
     small.removeListener(listenerSmall)
     medium.removeListener(listenerMedium)
     large.removeListener(listenerLarge)
    };
  }, []);

  // publish value for render
  return {
    isSmall,
    isMedium,
    isLarge
  }; 
}