import { HamMenu } from '.';
import { Logo } from './ui/Logo';

export const Nav = () => {
  return (
    <nav className='py-[0.8125rem] md:pt-12 max-md:border-b border-gray-200 sticky top-0 max-md:bg-white/75 max-md:backdrop-blur'>
      <div className='layout-container flex items-center justify-between'>
        <Logo />
        <HamMenu />
      </div>
    </nav>
  );
};
