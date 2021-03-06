
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function operating_hours_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m53 50.2a1.3 1.3 0 0 1-0.4-1v-8.4a1.4 1.4 0 0 0-1.3-1.4h-2.6a1.4 1.4 0 0 0-1.3 1.4v10.6a1.9 1.9 0 0 0 0.4 1l6.5 6.5a1.3 1.3 0 0 0 1.8 0l1.9-1.9a1.3 1.3 0 0 0 0-1.9z m-3-21.3a21.1 21.1 0 1 0 21.2 21.1 21.2 21.2 0 0 0-21.2-21.1z m0 37a15.8 15.8 0 1 1 15.9-15.9 15.9 15.9 0 0 1-15.9 15.8z m-21.2-6a15.7 15.7 0 0 1 0-19.8l-3.5-4.1a21 21 0 0 0 0 27.9z m42.4-19.8a15.7 15.7 0 0 1 0 19.8l3.4 4.1a21 21 0 0 0 0-27.9z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(operating_hours_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
