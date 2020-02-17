
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom104_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72.7 20.6h-45.4c-1.7 0-3.1 1.4-3.1 3.1v15.4h51.5v-15.4c0-1.7-1.3-3.1-3-3.1z m-27.2 21.7v37.1h27.2c1.7 0 3.1-1.4 3.1-3.1v-34h-30.3z m-21.2 0v34c0 0.9 0.3 1.6 0.9 2.2 0.5 0.6 1.3 0.9 2.1 0.9h15.2v-37.1h-18.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom104_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  