
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function filter_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.2 4h-44.4c-1.4 0-2.2 1.7-1.3 2.8l19.5 22.7c0.6 0.7 1 1.7 1 2.6v14.4c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-14.4c0-1 0.3-1.9 1-2.6l19.5-22.7c0.9-1.1 0.2-2.8-1.3-2.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(filter_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  