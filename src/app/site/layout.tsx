import Navigation from '@/components/site/Navigation';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='h-full'>
      <Navigation />
      <div>{children}</div>
    </main>
  );
};

export default layout;
