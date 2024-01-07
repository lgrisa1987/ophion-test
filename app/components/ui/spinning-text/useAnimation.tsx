import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const duration = 0.4;
const stagger = { each: 0.02, ease: 'power2', from: 'start' } as
  | gsap.NumberValue
  | gsap.StaggerVars;

const useAnimation = (yPos: string) => {
  const containerRef = useRef(null);
  const originalTextRef = useRef<HTMLDivElement>(null!);
  const cloneTextRef = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })

        .to(originalTextRef.current.children, {
          duration,
          rotationX: 90,
          y: yPos,
          stagger,
        })
        .to(
          originalTextRef.current.children,
          {
            duration,
            opacity: 0,
            stagger,
            ease: 'power4.in',
          },
          0
        )

        .to(
          cloneTextRef.current.children,
          { duration: 0.05, opacity: 1, stagger },
          0.001
        )
        .to(
          cloneTextRef.current.children,
          { duration, rotationX: 0, stagger },
          0
        );
    },
    { scope: containerRef }
  );

  return { containerRef, originalTextRef, cloneTextRef, tl };
};

export default useAnimation;
