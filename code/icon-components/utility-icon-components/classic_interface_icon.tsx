
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function classic_interface_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m25.5 35.7v-8.5s-3.8 5.7-6.2 9.6-2.1 7-2.1 7c0 3.1 2.3 5.7 5.1 5.7 1.7 0 3.2-0.9 4.1-2.4 0.9 1.3 2.3 2 3.9 2 2.8 0 5.1-2.5 5.1-5.7 0-0.3-0.1-0.6-0.1-0.9 0-4.2-9.2-15.5-9.2-15.5v8.7l1.2 2.9c0 0.1 0.1 0.2 0.1 0.4 0 0.7-0.6 1.3-1.3 1.3-0.7 0-1.3-0.6-1.3-1.3 0-0.1 0-0.3 0.1-0.4l0.6-2.9m-9.6-7.4l8-3s-6.6-1.6-11.2-2.5c-4.6-0.9-7.3 0.5-7.3 0.5-2.9 1.1-4.5 4.1-3.6 6.7 0.6 1.6 2 2.7 3.7 3.1-0.9 1.3-1.1 2.9-0.6 4.4 1 2.6 4.1 3.9 7.1 2.8 0.3-0.1 0.6-0.3 0.8-0.4 4-1.4 11.3-14 11.3-14l-7.8 2.9-0.3 0.1-2.3 2.1c-0.1 0.1-0.2 0.1-0.3 0.2-0.7 0.3-1.5-0.1-1.7-0.8-0.3-0.7 0.1-1.5 0.8-1.7 0.1 0 0.3-0.1 0.4-0.1l3-0.3m4-11.9l5.1 6.9s-0.4-6.8-0.8-11.4c-0.4-4.6-2.5-6.9-2.5-6.9-1.9-2.5-5.2-3.2-7.4-1.5-1.4 1-2 2.7-1.9 4.4-1.5-0.5-3.1-0.3-4.4 0.6-2.2 1.7-2.5 5.1-0.7 7.6 0.2 0.2 0.4 0.5 0.6 0.7 2.5 3.4 16.7 6.9 16.7 6.9l-5-6.7-0.2-0.2-2.7-1.6-0.3-0.3c-0.4-0.6-0.3-1.4 0.3-1.9 0.6-0.4 1.4-0.3 1.9 0.3 0.1 0.1 0.1 0.2 0.2 0.3l1.1 2.8m16.2 11.9l-8-3s6.6-1.6 11.2-2.5c4.6-0.9 7.3 0.5 7.3 0.5 2.9 1.1 4.5 4.1 3.6 6.7-0.6 1.6-2 2.7-3.7 3.1 0.9 1.3 1.1 2.9 0.6 4.4-1 2.6-4.1 3.9-7.1 2.8-0.3-0.1-0.6-0.3-0.8-0.4-4-1.4-11.3-14-11.3-14l7.8 2.9 0.3 0.1 2.3 2.1c0.1 0.1 0.2 0.1 0.3 0.2 0.7 0.3 1.5-0.1 1.7-0.8 0.3-0.7-0.1-1.5-0.8-1.7-0.1 0-0.3-0.1-0.4-0.1l-3-0.3m-4.4-11.9l-5.1 6.9s0.4-6.8 0.8-11.4 2.5-6.9 2.5-6.9c1.9-2.5 5.2-3.2 7.4-1.5 1.4 1 2 2.7 1.9 4.4 1.5-0.4 3.1-0.2 4.3 0.7 2.2 1.7 2.5 5.1 0.7 7.6-0.2 0.2-0.4 0.5-0.6 0.7-2.4 3.3-16.6 6.7-16.6 6.7l5-6.7 0.2-0.2 2.7-1.6 0.3-0.3c0.4-0.6 0.3-1.4-0.3-1.9-0.6-0.4-1.4-0.3-1.9 0.3-0.1 0.1-0.1 0.2-0.2 0.3l-1.1 2.9"/>
	</g>
	<path d="m17.5 41.6" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(classic_interface_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  