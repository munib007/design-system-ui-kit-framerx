
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function action_list_component_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.2 63.9h29.9c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-29.9c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m0-17.9h29.9c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-29.9c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m0-17.8h29.9c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-29.9c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m-19.2 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z m0 35.7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z m0-22.9c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z m0 12c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3s3 1.4 3 3c0 1.7-1.3 3-3 3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(action_list_component_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  