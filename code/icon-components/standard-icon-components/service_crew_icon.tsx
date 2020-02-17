
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_crew_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m60.1 51.3h-3.7v-4.4c0-5.9-3.3-11-8.1-13.5v7.6c0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2v-7.8c-4.9 2.6-8.3 7.7-8.3 13.6v4.4h-3.6c-1.2 0-2.1 0.9-2.1 2.1s0.9 2.1 2.1 2.1h38.1c1.2 0 2.1-0.9 2.1-2.1s-0.9-2-2.1-2z m-18.9-7.4c1.6 0 2.9-1.3 2.9-2.9v-9.2c-1-0.2-2-0.3-3-0.3s-1.9 0.1-2.8 0.3v9.2c-0.1 1.6 1.2 2.9 2.9 2.9z"/>
	</g>
	<path d="m41.1 77.3c-8.9 0-16.1-7.9-16.1-17.6h4c0 7.5 5.4 13.6 12.1 13.6s12.1-6.1 12.1-13.6h4c-0.1 9.7-7.3 17.6-16.1 17.6z m24.2-45.8c1.1 0 2.1-0.9 2.1-2.1v-6.5c-0.7-0.1-1.4-0.2-2.1-0.2-0.7 0-1.3 0.1-2 0.2v6.5c-0.1 1.1 0.9 2.1 2 2.1z m-0.1 26v-4c4.3 0 7.9-4 7.9-8.9h4c0 7.1-5.3 12.9-11.9 12.9z m12.8-21.4h-2v-2.6c0-4.1-2.3-7.7-5.7-9.5v5.4c0 2.8-2.3 5-5 5-2.8 0-5-2.3-5-5v-5.5c-3.3 1.7-5.6 5.1-5.8 9.1 2.1 2.1 3.6 4.6 4.6 7.3h18.9c1.2 0 2.1-0.9 2.1-2.1s-0.9-2.1-2.1-2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(service_crew_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  