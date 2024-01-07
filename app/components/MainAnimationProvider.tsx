'use client';

import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAppContextProvider } from './Context';

type MainAnimationProviderProps = {
  children: ReactNode;
};
const mediaQueries = {
  isDesktop: '(min-width: 768px)',
  isMobile: '(max-width:767px)',
};

export const MainAnimationProvider = ({
  children,
}: MainAnimationProviderProps) => {
  const {
    isDrawerOpen,
    isInitialAnimationComplete,
    setIsInitialAnimationComlete,
  } = useAppContextProvider();
  const mainContainerRef = useRef(null);
  const tl = useRef<gsap.core.Timeline>(null!);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        paused: true,
        onComplete: (timeline) => {
          console.log(timeline);
        },
        onReverseComplete: (tl) => console.log(tl),
      });
      gsap.matchMedia(mainContainerRef).add(mediaQueries, (context) => {
        tl.current.to(
          '#drawer',
          {
            x: context.conditions?.isDesktop ? '60%' : '100%',
            duration: 1,
            ease: 'expo',
          },
          0
        );
      });
      tl.current
        .to(
          '#title span',
          { y: 0, duration: 1, stagger: 0.1, ease: 'power4.inOut' },
          0
        )
        .to(
          '#copy span',
          { y: 0, duration: 1, stagger: 0.1, ease: 'power4.inOut' },
          0.3
        )
        .to(
          '#ctaContainer a',
          { width: '100%', duration: 1, stagger: 0.1, ease: 'power4.inOut' },
          0.3
        )
        .to(
          '#ctaContainer a>div',
          { autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: 'power4.inOut' },
          0.9
        )
        .set('#drawer', { zIndex: 0 }, 0.3)
        .to(
          '#imgContainer',
          {
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1,
            ease: 'expo',
          },
          0.6
        )
        .to(
          '#imgContainer img',
          {
            scale: 1,
            duration: 2,
            ease: 'expo',
          },
          0.3
        );
    },
    {
      scope: mainContainerRef,
    }
  );

  useGSAP(() => {
    tl.current[isDrawerOpen ? 'reverse' : 'play']();
  }, [isDrawerOpen]);

  return (
    <div className='h-full' ref={mainContainerRef}>
      {children}
    </div>
  );
};
