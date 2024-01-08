'use client';
import { cn } from '@/app/utils/';
import { useAppContextProvider } from '../Context';

const lines = [
  {
    id: 1,
    d: 'M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058',
    activeState: '[stroke-dasharray:90_207] [stroke-dashoffset:-134]',
    inactiveState: '[stroke-dasharray:60_207]',
  },
  {
    id: 2,
    d: 'M 20,50 H 80',
    activeState: '[stroke-dasharray:1_60] [stroke-dashoffset:-30]',
    inactiveState: '[stroke-dasharray:60_60]',
  },
  {
    id: 3,
    d: 'M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942',
    activeState: '[stroke-dasharray:90_207] [stroke-dashoffset:-134]',
    inactiveState: '[stroke-dasharray:60_207]',
  },
];

export const HamMenu = () => {
  const { isDrawerOpen, setIsDrawerOpen, setIsDrawerOpenFirstTime } =
    useAppContextProvider();
  return (
    <button
      className='w-[2.25rem] group'
      onClick={() => {
        setIsDrawerOpen(!isDrawerOpen), setIsDrawerOpenFirstTime(true);
      }}
      aria-label={`${isDrawerOpen ? 'Colapsar' : 'Desplegar'} menu`}
      aria-expanded={isDrawerOpen}
    >
      <svg
        width='100'
        height='100'
        viewBox='0 0 100 100'
        className='h-auto w-full '
        aria-hidden={true}
      >
        {lines.map(({ id, d, activeState, inactiveState }) => {
          const activeClasses = isDrawerOpen ? activeState : inactiveState;
          return (
            <path
              key={id}
              className={`${cn(
                'fill-none  stroke-mine-shaft md:group-hover:stroke-white stroke-[0.375rem] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]',
                activeClasses
              )}`}
              d={d}
            />
          );
        })}
      </svg>
    </button>
  );
};
