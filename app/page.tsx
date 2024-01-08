import { Hero } from './components';

export default function Home() {
  return (
    <main className='h-[calc(100%-var(--main-height))] min-h-[33.125rem] relative'>
      <Hero />
    </main>
  );
}
