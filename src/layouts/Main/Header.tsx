import React from 'react';
import { style, media, classes } from 'typestyle';

/* components */
import { ActiveLink } from 'app/src/components/ActiveLink';

type Props = {
  color?: string,
}

const styles = {
  container: style(
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      transition: '0.25s background-color ease-in-out',
      $nest: {
        svg: {
          width: 340,
        },
      },
    },
    media({ maxWidth: 480 }, {
      height: 64,
      $nest: {
        svg: {
          width: 180,
        },
      },
    }),
  ),
};

export function Header(props: Props) {
  return (
    <header className={classes(styles.container)} style={{ backgroundColor: props.color || '#efefef' }}>
      <ActiveLink href="/">HEADER</ActiveLink>
    </header>
  );
}
