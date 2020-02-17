
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function topic_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m17.4 35.3c-0.1-0.3-0.4-0.6-0.7-0.7l-2.2-0.6c-0.4-0.1-0.9 0.1-1.1 0.5l-3.8 6.5c-1 1.8-0.4 2.4 1.4 1.4l6.6-3.8c0.4-0.2 0.6-0.7 0.5-1.1l-0.7-2.2z m17.2-18.6c0.1 0.3 0.4 0.6 0.7 0.7l2.2 0.6c0.4 0.1 0.9-0.1 1.1-0.5l3.8-6.6c1-1.8 0.4-2.4-1.4-1.4l-6.6 3.8c-0.4 0.2-0.6 0.7-0.5 1.1l0.7 2.3z m-21.2 0.9c0.2 0.4 0.7 0.6 1.1 0.5l2.2-0.6c0.3-0.1 0.6-0.4 0.7-0.7l0.6-2.2c0.1-0.4-0.1-0.9-0.5-1.1l-6.5-3.9c-1.8-1-2.4-0.4-1.4 1.4l3.8 6.6z m25.2 16.8c-0.2-0.4-0.7-0.6-1.1-0.5l-2.2 0.6c-0.3 0.1-0.6 0.4-0.7 0.7l-0.6 2.3c-0.1 0.4 0.1 0.9 0.5 1.1l6.6 3.8c1.8 1 2.4 0.4 1.4-1.4l-3.9-6.6z m10.1-9.2l-16.4-4.4c-0.6-0.1-1-0.6-1.1-1.1l-4.4-16.4c-0.5-1.7-1.2-1.7-1.7 0l-4.4 16.4c-0.1 0.6-0.6 1-1.1 1.1l-16.3 4.4c-1.7 0.5-1.7 1.2 0 1.7l16.4 4.4c0.6 0.1 1 0.6 1.1 1.1l4.4 16.4c0.5 1.7 1.2 1.7 1.7 0l4.4-16.4c0.1-0.6 0.6-1 1.1-1.1l16.4-4.4c1.6-0.5 1.6-1.3-0.1-1.7z m-22.7 4.8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
	</g>
</svg>
  );
};

addPropertyControls(topic_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  