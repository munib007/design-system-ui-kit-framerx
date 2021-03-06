
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function assignment_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m3.6 29.8h44.6c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6h-44.6c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6z m0-14.2h44.6c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6h-44.6c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.8 0.7-1.6 1.6-1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(assignment_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
