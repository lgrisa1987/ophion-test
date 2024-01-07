'use client';

import { cn } from '@/app/utils';
import useAnimation from './useAnimation';

type SpinningTextProps = {
  text: string;
  styles?: string;
  yPos: string;
};

export const SpinningText = ({ text, styles, yPos }: SpinningTextProps) => {
  const { containerRef, originalTextRef, cloneTextRef, tl } =
    useAnimation(yPos);

  return (
    <div
      className='w-full flex flex-col items-center justify-center h-full relative'
      onMouseEnter={() => tl.current.play()}
      onMouseLeave={() => tl.current.reverse()}
      ref={containerRef}
    >
      {[
        { t: text, ref: originalTextRef },
        { t: text, ref: cloneTextRef },
      ].map(({ t, ref }, i) => (
        <div
          key={i}
          ref={ref}
          className={`${cn(
            'leading-[0.8] [perspective:37.5rem] whitespace-nowrap',
            {
              'absolute top-1/2 -translate-y-1/2': i,
            }
          )}`}
        >
          {t.split('').map((letter: string, j) => (
            <div
              key={j}
              className={`${cn(
                'inline-block relative',
                {
                  '[transform:rotateX(-90deg)] opacity-0': i,
                },
                styles
              )}`}
              style={i ? { transformOrigin: `50% 50% ${yPos}` } : undefined}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
