import { Hero } from './components';

export default function Home() {
  return (
    <main className='h-[calc(100%_-_var(--main-height))] min-h-[33.125rem]'>
      <Hero />
    </main>
  );
}
