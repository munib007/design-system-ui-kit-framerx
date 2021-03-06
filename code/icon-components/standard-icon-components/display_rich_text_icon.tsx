
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function display_rich_text_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m22 71.8h56c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-56c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m0-18h56c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-56c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m35.6-18h20.4c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-20.4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m-10 8.6l-9.5-23.4c-0.2-0.4-0.6-0.7-1.1-0.7h-7.2c-0.4 0-0.9 0.3-1 0.7l-8.8 23.4c-0.1 0.4 0.1 1 0.7 1h4.6c0.4 0 0.9-0.4 1-0.8l1.8-5h11.1l2 5c0.1 0.4 0.6 0.8 1 0.8h4.6c0.6 0 0.9-0.5 0.8-1z m-17.4-10.8l2.9-7.4h0.6l3.2 7.4h-6.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(display_rich_text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
