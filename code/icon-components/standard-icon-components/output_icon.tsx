
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function output_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m20.8 53.8h41.5c1.1 0 1.6 1.4 0.9 2.1l-12 12c-0.8 0.8-0.8 1.9 0 2.6l2.8 2.8c0.8 0.8 1.9 0.8 2.6 0l21.9-22c0.8-0.8 0.8-1.9 0-2.6l-22-22c-0.8-0.8-1.9-0.8-2.6 0l-2.6 2.6c-0.8 0.8-0.8 1.9 0 2.6l12 12c0.8 0.9 0.3 2.3-0.9 2.3h-41.5c-1 0-1.9 0.8-1.9 1.8v3.8c0 1 0.8 2 1.8 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(output_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  