import { Fragment, ReactNode } from 'react';

type TitleProps = {
  title: string;
  styles: string;
  children: ReactNode;
};

export const Title = ({ title, styles, children }: TitleProps) => {
  return (
    <div className={styles}>
      {title.split(' ').map((word, i, arr) => (
        <Fragment key={i}>
          <div className='inline-block'>
            <span
              dangerouslySetInnerHTML={{
                __html: `${word}${i !== arr.length - 1 ? '&nbsp;' : ''}`,
              }}
            />
          </div>
        </Fragment>
      ))}
      {children}
    </div>
  );
};
