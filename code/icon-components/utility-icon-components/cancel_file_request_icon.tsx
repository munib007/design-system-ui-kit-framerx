
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function cancel_file_request_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m28.6 11.4h5.1c0.6 0 1.1-0.5 1.1-1.1 0-0.3-0.1-0.5-0.3-0.8l-7.2-7.1c-0.2-0.2-0.4-0.3-0.7-0.3-0.6 0-1.1 0.5-1.1 1.1v5.1c0 1.7 1.4 3.1 3.1 3.1z m-4 29.2c0-6.8 4.2-12.6 10.2-14.9v-8.1c0-0.9-0.7-1.6-1.6-1.6h-7.8c-2.6 0-4.7-2.1-4.7-4.6v-7.8c0.1-0.8-0.6-1.5-1.5-1.5h-12.4c-2.6 0-4.7 2.1-4.7 4.6v29.4c0 2.6 2.1 4.6 4.7 4.6h17.8v-0.1z m7.2-6l6 6-6 6c-0.6 0.6-0.6 1.6 0 2.1l0.7 0.7c0.6 0.6 1.6 0.6 2.1 0l6-6 6 6c0.6 0.6 1.6 0.6 2.1 0l0.7-0.7c0.6-0.6 0.6-1.6 0-2.1l-6-6 6-6c0.6-0.6 0.6-1.6 0-2.1l-0.7-0.7c-0.6-0.6-1.6-0.6-2.1 0l-6 6-6-6c-0.6-0.6-1.6-0.6-2.1 0l-0.7 0.7c-0.6 0.5-0.6 1.5 0 2.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(cancel_file_request_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
