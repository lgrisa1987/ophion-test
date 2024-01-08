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
  const { isDrawerOpen, isDrawerOpenFirstTime } = useAppContextProvider();
  const mainContainerRef = useRef(null);
  const tl = useRef<gsap.core.Timeline>(null!);
  const tlDrawer = useRef<gsap.core.Timeline>(null!);

  useGSAP(
    () => {
      gsap.to('#nav', { autoAlpha: 1, delay: 1 });
      gsap.matchMedia(mainContainerRef).add(mediaQueries, (context) => {
        gsap.to('#greenOverlay', {
          x: context.conditions?.isDesktop ? '60%' : '100%',
          duration: context.isReverted ? 0 : 1,
          ease: 'expo.inOut',
        });
      });
    },
    {
      scope: mainContainerRef,
    }
  );

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .set('#mainSection', { zIndex: 1 })
        .to(
          '#title span',
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.inOut',
          },
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

  useGSAP(
    () => {
      gsap.set('#drawer', { x: '100%' });
      tlDrawer.current = gsap
        .timeline({
          paused: true,
        })
        .to('#drawer', { x: 0, ease: 'expo.out', duration: 1.5 })
        .to(
          '.list-item > div',
          { y: 0, stagger: 0.1, autoAlpha: 1, ease: 'expo.out' },
          1
        );
    },
    {
      scope: mainContainerRef,
    }
  );

  useGSAP(() => {
    if (isDrawerOpenFirstTime) {
      isDrawerOpen
        ? gsap.delayedCall(1.3, () => tlDrawer.current.play())
        : tlDrawer.current.reverse();
      !isDrawerOpen
        ? gsap.delayedCall(0.5, () => tl.current.play())
        : tl.current.reverse();
    }
  }, [isDrawerOpenFirstTime, isDrawerOpen]);

  return (
    <div className='h-full' ref={mainContainerRef}>
      {children}
    </div>
  );
};
