
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_person_account_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m41.7 33.2c-2.9-1.2-3.4-2.3-3.4-3.5 0-1.2 0.8-2.3 1.8-3.2 1.7-1.5 2.6-3.7 2.6-6.2 0-4.6-3-8.7-8.2-8.7s-8.2 4-8.2 8.7c0 2.6 1 4.6 2.6 6.2 1 0.9 1.8 2 1.8 3.2 0 1.2-0.5 2.3-3.4 3.5-4.3 1.8-8.3 4-8.4 7.8 0 2.5 1.9 5 4.3 5h22.4c2.5 0 4.3-2.5 4.3-5 0.2-3.7-3.9-6-8.2-7.8z m-19.2 3.7" fill={props.fill}/>
	<path d="m23.4 27.1c-0.3-0.4-1.9-2.4-1.8-7.8 0.1-5.3 2.4-6.6 2.4-6.6v-5.2c0-0.9-0.9-1.5-1.5-1.5h-19s-1.5 0.7-1.5 1.6v34.9h10.8c0.3-8.9 10.5-12.5 10.5-12.5 1.5-0.8 0.4-2.5 0.1-2.9z m-12.8 11c0 0.9-0.7 1.6-1.6 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-1.6c0-0.9 0.7-1.6 1.6-1.6h1.6c0.9 0 1.6 0.7 1.6 1.6v1.6z m0-7.9c0 0.9-0.7 1.6-1.6 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-1.6c0-0.9 0.7-1.6 1.6-1.6h1.6c0.9 0 1.6 0.7 1.6 1.6v1.6z m0-8c0 0.9-0.7 1.6-1.6 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-1.6c0-0.9 0.7-1.6 1.6-1.6h1.6c0.9 0 1.6 0.7 1.6 1.6v1.6z m0-7.9c0 0.9-0.7 1.6-1.6 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-1.6c0-0.9 0.7-1.6 1.6-1.6h1.6c0.9 0 1.6 0.7 1.6 1.6v1.6z m9 15.9c0 0.9-0.7 1.6-1.6 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-1.6c0-0.9 0.7-1.6 1.6-1.6h1.6c0.9 0 1.6 0.7 1.6 1.6v1.6z m0-8c0 0.9-0.7 1.6-1.6 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-1.6c0-0.9 0.7-1.6 1.6-1.6h1.6c0.9 0 1.6 0.7 1.6 1.6v1.6z m0-7.9c0 0.9-0.7 1.6-1.6 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-1.6c0-0.9 0.7-1.6 1.6-1.6h1.6c0.9 0 1.6 0.7 1.6 1.6v1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_person_account_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  