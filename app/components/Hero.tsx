import Image from 'next/image';
import { Button, SpinningText, Title } from '.';

const copy = [
  'Diseño de experiencia de usuario',
  'Maquetación y diseño',
  'Desarrollo por sprints',
];

export const Hero = () => {
  return (
    <section className='md:layout-container md:h-[min(100%,42.5rem)] md:pt-[4.0625rem]'>
      <div className='flex flex-col md:flex-row-reverse h-full md:gap-[8%] md:justify-between'>
        <div className='relative w-full h-[min(95vw,26.25rem)] md:h-full md:flex-1 md:max-w-[40.625rem]'>
          <Image
            src='/assets/escritorio-de-trabajo.jpg'
            fill
            sizes='(max-width: 768px) 100vw, 60vw'
            alt='Escritorio de trabajo'
            className='object-bottom object-cover'
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
          <div className='mt-4 mb-10'>
            {copy.map((copyline) => (
              <p className='text-lg overflow-hidden' key={copyline}>
                <span>{copyline}</span>
              </p>
            ))}
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,_minmax(7.5rem,_1fr))] gap-[1.875rem] md:gap-4'>
            <Button styles='bg-bright-turquoise text-mine-shaft'>
              <SpinningText text='Empezar' yPos='-0.75rem' />
            </Button>
            <Button styles='bg-mine-shaft text-wild-sand text-white'>
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
  );
};
