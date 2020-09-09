import React from 'react';
import { style, classes } from 'typestyle';

type Props = {
  changing: boolean,
}

const styles = {
  container: style(
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.65)',
    },
  ),
};

export function GlobalLoader(props: Props) {
  if (!props.changing) {
    return null;
  }

  return (
    <div className={classes(styles.container)}>
      <div className="loading loading-lg" />
    </div>
  );
}
