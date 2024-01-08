import Image from 'next/image';
import { Button, SpinningText, Title } from '.';
import { cn } from '@/app/utils';

const copy = [
  'Diseño de experiencia de usuario',
  'Maquetación y diseño',
  'Desarrollo por sprints',
];

const ctaStyles = '[&>div]:opacity-0 w-0 overflow-hidden';

export const Hero = () => {
  return (
    <>
      <section className='md:layout-container md:h-[min(100%,42.5rem)] md:pt-[4.0625rem] relative z-[1]'>
        <div
          className='flex flex-col md:flex-row-reverse h-full md:gap-[8%] md:justify-between'
          id='mainSection'
        >
          <div
            id='imgContainer'
            className='relative w-full h-[min(calc(100dvh-24.375rem),28.125rem)] md:h-full md:flex-1 md:max-w-[40.625rem] overflow-hidden [clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0%_100%)] landscape:min-h-[18.75rem]'
          >
            <Image
              src='/assets/escritorio-de-trabajo.jpg'
              fill
              sizes='(max-width: 768px) 100vw, 60vw'
              alt='Escritorio de trabajo'
              className='object-bottom object-cover scale-[3] origin-bottom'
              priority
            />
          </div>
          <div className='md:flex-1 md:max-w-[19.6875rem] py-6 flex flex-col justify-center max-md:px-[5%] sm:text-center md:text-left'>
            <Title
              title='Calidad, como cualidad'
              styles='font-bold text-[min(11vw,2.5rem)] md:text-[4rem] leading-[1.15] [&>div:first-child]:max-sm:block'
            >
              <h1 className='hidden'>Calidad, como cualidad</h1>
            </Title>
            <div className='mt-4 mb-10' id='copy'>
              {copy.map((copyline) => (
                <p className='text-lg overflow-hidden' key={copyline}>
                  <span className='inline-block translate-y-full'>
                    {copyline}
                  </span>
                </p>
              ))}
            </div>
            <div
              id='ctaContainer'
              className='grid grid-cols-[repeat(auto-fit,_minmax(7.5rem,_1fr))] gap-[1.875rem] md:gap-4'
            >
              <Button
                styles={`${cn(
                  'bg-bright-turquoise text-mine-shaft',
                  ctaStyles
                )}`}
              >
                <SpinningText text='Empezar' yPos='-0.75rem' />
              </Button>
              <Button
                styles={`${cn(
                  'bg-mine-shaft text-wild-sand text-white',
                  ctaStyles
                )}`}
              >
                <SpinningText
                  text='Contacto'
                  styles='text-white'
                  yPos='-0.75rem'
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div
        className='w-full h-full fixed bg-bright-turquoise top-0 left'
        id='greenOverlay'
      />
    </>
  );
};
