
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function inspector_panel_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m3.8 45.3h45c0.8 0 1.5-0.7 1.5-1.5v-8.3c0-0.8-0.7-1.5-1.5-1.5h-45c-0.8 0-1.5 0.7-1.5 1.5v8.3c0 0.8 0.7 1.5 1.5 1.5z m0-38.6c-0.8 0-1.6 0.7-1.6 1.5v20.4c0 0.7 0.8 1.4 1.6 1.4h44.8c0.8 0 1.5-0.7 1.5-1.5v-20.3c0-0.8-0.7-1.5-1.5-1.5h-44.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(inspector_panel_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
