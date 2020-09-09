type Pageview = {
  url: string,
  title?: string,
}

export const pageview = (props: Pageview) => {
  (window as any).gtag('config', process.env.GA, {
    page_path: props.url,
  });
};

type Event = {
  category: string,
  label?: string,
  value?: number,
}

export const event = (action: string, props: Event) => {
  (window as any).gtag('event', action, {
    event_category: props.category,
    event_label: props.label,
    value: props.value,
  });
};
