'use client';
import { SpinningText } from '.';
import { useAppContextProvider } from './Context';

export const Drawer = () => {
  const { setIsDrawerOpen } = useAppContextProvider();
  return (
    <div className='w-full h-full fixed bg-bright-turquoise z-[9]' id='drawer'>
      <ul className='layout-container flex flex-col items-center text-[3.125rem] md:text-[4.375rem] uppercase font-extrabold h-full justify-center landscape:gap-5'>
        {['Home', 'Empezar', 'Contacto'].map((item) => (
          <li
            className='[&>div]:translate-y-[150%] list-item overflow-hidden h-[15%] cursor-pointer'
            key={item}
            onClick={() => setIsDrawerOpen(false)}
          >
            <SpinningText
              text={item}
              yPos='-2.1875rem'
              styles='text-mine-shaft'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
