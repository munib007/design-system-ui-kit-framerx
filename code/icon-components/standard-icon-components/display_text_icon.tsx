
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function display_text_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72.3 20.1h-44.5c-4.3 0-7.8 3.5-7.8 7.8v44.3c0 4.3 3.5 7.8 7.8 7.8h44.4c4.3 0 7.8-3.5 7.8-7.8v-44.3c0.1-4.3-3.4-7.8-7.7-7.8z m-41.9 13c0-1.4 1.2-2.6 2.6-2.6h29.2c1.4 0 2.6 1.2 2.6 2.6v2.7c0 1.4-1.1 2.6-2.5 2.6h-29.3c-1.4 0-2.6-1.2-2.6-2.6v-2.7z m30.8 34c0 1.4-1.1 2.6-2.5 2.6h-25.7c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h25.6c1.4 0 2.6 1.2 2.6 2.6v2.6z m8.4-15.7c0 1.4-1.1 2.6-2.5 2.6h-34.1c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h34c1.4 0 2.6 1.2 2.6 2.6v2.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(display_text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  