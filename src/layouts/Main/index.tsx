import React from 'react';

/* dir */
import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
  headerColor?: string,
  className?: string,
  children: any,
}

export function MainLayout(props: Props) {
  return (
    <>
      <Header color={props.headerColor} />

      <main className={props.className}>{props.children}</main>

      <Footer />
    </>
  );
}
