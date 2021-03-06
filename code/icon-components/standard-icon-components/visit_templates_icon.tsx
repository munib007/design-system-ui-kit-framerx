
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function visit_templates_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m30 58c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h20c0.5 0 0.9 0.2 1.3 0.5 3.2-3.5 7.7-5.9 12.7-6.4v-20.1c0-3.3-2.7-6-6-6h-32c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h20c0-2.8 0.6-5.5 1.7-8h-17.7z m-2-28c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-20c-1.1 0-2-0.9-2-2v-2z m0 12c0-1.1 0.9-2 2-2h24c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-24c-1.1 0-2-0.9-2-2v-2z m38 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14z m7.9 10.5l-8.9 9.7c-0.4 0.4-0.8 0.6-1.4 0.6-0.5 0-1-0.2-1.4-0.6l-4.8-4.7c-0.4-0.4-0.4-1 0-1.3l1.4-1.3c0.4-0.4 1-0.4 1.4 0l3.4 3.4 7.5-8.4c0.4-0.4 1-0.4 1.4 0l1.4 1.3c0.3 0.3 0.3 1 0 1.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(visit_templates_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
