
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function away_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 9c-9.4-9.3-24.6-9.3-34 0s-9.3 24.6 0 34 24.6 9.3 34 0 9.3-24.6 0-34z m-29.7 4.3c7-7 18.5-7 25.5 0 2.8 2.8 4.5 6.2 5 9.7h-35.6c0.6-3.6 2.3-7 5.1-9.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(away_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
