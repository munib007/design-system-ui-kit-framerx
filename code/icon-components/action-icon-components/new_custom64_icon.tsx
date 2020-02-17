
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom64_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26 2c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z m0 41.6c-9.7 0-17.6-7.9-17.6-17.6s7.9-17.6 17.6-17.6 17.6 7.9 17.6 17.6-7.9 17.6-17.6 17.6z m9.3-27.9l-13.3 4.8c-0.7 0.2-1.3 0.8-1.5 1.5l-4.8 13.3c-0.2 0.6 0.4 1.3 1 1l13.3-4.8c0.7-0.2 1.3-0.8 1.5-1.5l4.8-13.3c0.3-0.6-0.4-1.3-1-1z m-9.3 13.5c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom64_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  