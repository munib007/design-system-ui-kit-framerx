
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m30 29h16.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-16.5c-0.6 0-1-0.4-1-1v-16.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v16.5c0 0.6-0.4 1-1 1h-16.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h16.5c0.6 0 1 0.4 1 1v16.5c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-16.5c0-0.6 0.4-1 1-1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
