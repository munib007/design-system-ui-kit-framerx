
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_update_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m40.8 7.7" fill={props.fill}/>
	<g fill={props.fill}>
		<path d="m17.2 11.6h17.6c0.9 0 1.6-0.7 1.6-1.6v-3.2c0-2.6-2.2-4.8-4.8-4.8h-11.2c-2.6 0-4.8 2.2-4.8 4.8v3.2c0 0.9 0.7 1.6 1.6 1.6z m26.4-5.6h-1.6c-0.5 0-0.8 0.3-0.8 0.8v3.2c0 3.5-2.9 6.4-6.4 6.4h-17.6c-3.5 0-6.4-2.9-6.4-6.4v-3.2c0-0.5-0.3-0.8-0.8-0.8h-1.6c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8v-34.4c0-2.6-2.2-4.8-4.8-4.8z m-9.6 24.4l-12.8 12.8-5.6 1.6c-0.5 0.1-1-0.4-0.9-0.9l1.6-5.5 12.8-12.8c0.2-0.2 0.5-0.2 0.7 0l4.1 4.2c0.3 0.1 0.3 0.4 0.1 0.6z m3.7-3.7l-1.6 1.6c-0.2 0.2-0.5 0.2-0.7 0l-4.2-4.2c-0.2-0.2-0.2-0.5 0-0.7l1.6-1.6c0.7-0.8 2-0.8 2.7 0l2.1 2.1c0.9 0.8 0.9 2 0.1 2.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(record_update_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
