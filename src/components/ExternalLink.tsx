import React from 'react';

/* from app */
import * as analytics from 'app/src/analytics';

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  analytics: {
    category: string,
    label?: string,
  },
}

export function ExternalLink(props: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(e);
    }

    analytics.event('onClick', props.analytics);
  };

  return (
    <a {...props} href={props.href} target="_blank" rel="noreferrer noopener" onClick={handleClick}>{props.children}</a>
  );
}
