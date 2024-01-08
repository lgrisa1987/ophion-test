'use client';

import { HamMenu } from '.';
import { cn } from '@/app/utils';
import { useAppContextProvider } from './Context';
import { Logo } from './ui/Logo';

export const Nav = () => {
  const { isDrawerOpen } = useAppContextProvider();
  const conditionalStyles = isDrawerOpen
    ? 'max-md:bg-white/0 border-gray-200/0'
    : 'max-md:bg-white border-gray-200 max-md:[transition-delay:1.5s]';
  return (
    <nav
      className={`${cn(
        'py-[0.4063rem] md:pt-12 max-md:border-b sticky top-0 z-10 max-md:transition-colors max-md:duration-1000 opacity-0',
        conditionalStyles
      )}`}
      id='nav'
    >
      <div className='layout-container flex items-center justify-between'>
        <Logo />
        <HamMenu />
      </div>
    </nav>
  );
};
