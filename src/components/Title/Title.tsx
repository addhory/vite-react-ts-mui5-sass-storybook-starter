import clsx from 'clsx';
import React from 'react';
import styles from '../Title/title.module.scss';

const Title = () => {
  return (
    <div>
      <h1 className={clsx({ [styles.heading]: false })}>Something Heading 1</h1>
    </div>
  );
};

export default Title;
