import React from 'react';
import { useRouter } from 'next/router';

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  as?: string,
}

export function ActiveLink(props: Props) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!props.target) {
      e.preventDefault();

      if (props.onClick) {
        props.onClick(e);
      }

      router.push(props.href as string, props.as ? props.as : props.href, { shallow: true });
    } else if (props.onClick) {
      props.onClick(e);
    }
  };

  if (props.href === '/') {
    return (
      <a {...props} href="/">{props.children}</a>
    );
  }

  return (
    <a {...props} href={props.href} onClick={handleClick}>{props.children}</a>
  );
}
