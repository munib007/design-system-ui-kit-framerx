
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function read_receipts_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.9 43.4c0.7 0.6 1.5 0.6 2.2 0l23-21.3c0.4-0.8 0.3-2.1-1.3-2.1l-45.6 0.1c-1.2 0-2.2 1.1-1.3 2.1l23 21.2z m25.4-12.2c0-1.1-1.3-1.6-2-0.9l-17.9 16.6c-1.2 1.1-2.8 1.7-4.4 1.7-1.6 0-3.2-0.6-4.4-1.7l-18-16.6c-0.8-0.7-2-0.2-2 0.9v21.2c0 2.7 2.2 4.9 4.9 4.9h23.9v-6.1c0.2-3.3 2.8-6 6.2-6.2h0.7c3.3 0.2 6 2.8 6.2 6.2v6.1h2.2c2.7 0 4.9-2.2 4.9-4.9-0.3 0-0.3-14.7-0.3-21.2z"/>
	</g>
	<path d="m71.1 63.7l-6.7-2.3c-0.5-0.2-0.9-0.7-0.9-1.2v-8.9c0-1.4-1.1-2.4-2.5-2.4h-0.2c-1.4 0-2.5 1.1-2.5 2.4v17.5c0 1.5-1.9 2.1-2.7 0.8l-1.7-3.6c-0.9-1.5-2.9-2-4.4-0.9l-1.1 0.9 5.6 13.3c0.2 0.6 0.8 0.9 1.5 0.9h14.7c0.7 0 1.3-0.5 1.5-1.1l2.6-9.3c0.6-2.7-0.8-5.2-3.2-6.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(read_receipts_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  