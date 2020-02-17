
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function paste_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m17.5 12h17c0.8 0 1.5-0.7 1.5-1.5v-4.5c0-2.2-1.8-4-4-4h-12c-2.2 0-4 1.8-4 4v4.5c0 0.8 0.7 1.5 1.5 1.5z m26.5-6h-2.5c-0.8 0-1.5 0.7-1.5 1.5v4.5c0 2.2-1.8 4-4 4h-20c-2.2 0-4-1.8-4-4v-4.5c0-0.8-0.7-1.5-1.5-1.5h-2.5c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4z m-6 35c0 0.6-0.4 1-1 1h-22c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h22c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-22c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h22c0.6 0 1 0.4 1 1v2z m0-8c0 0.6-0.4 1-1 1h-22c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h22c0.6 0 1 0.4 1 1v2z"/>
	</g>
</svg>
  );
};

addPropertyControls(paste_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  