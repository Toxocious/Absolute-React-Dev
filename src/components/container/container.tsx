import React, { useState } from 'react';

import './container.scss';

export const Container_Component = (props: any) => {
  const [stylesheet, setStylesheet] = useState('src/themes/styles/absol.scss');

  return (
    <>
      <link rel='stylesheet' type='text/css' href={stylesheet} />
      <div className='container'>{props.children}</div>
    </>
  );
};
