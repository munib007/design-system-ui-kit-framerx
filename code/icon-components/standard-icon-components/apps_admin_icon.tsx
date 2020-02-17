
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function apps_admin_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73 21h-46c-3.3 0-6 2.7-6 6v46c0 3.3 2.7 6 6 6h46c3.3 0 6-2.7 6-6v-46c0-3.3-2.7-6-6-6z m-2 52h-42c-1.1 0-2-0.9-2-2v-42c0-1.1 0.9-2 2-2h42c1.1 0 2 0.9 2 2v42c0 1.1-0.9 2-2 2z m-26-40h-10c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h10c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z m20 0h-10c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h10c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z m-20 20h-10c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h10c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z m20 0h-10c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h10c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(apps_admin_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  