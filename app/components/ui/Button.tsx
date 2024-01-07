import { cn } from '@/app/utils';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  styles: string;
};

export const Button = ({ children, styles }: ButtonProps) => {
  return (
    <Link
      href='/'
      className={`${cn(
        'h-[3.6875rem] flex items-center w-full justify-center',
        styles
      )}`}
    >
      {children}
    </Link>
  );
};
