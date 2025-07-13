import React from 'react';
import IntroContainer from '../containers/IntroContainer';
import { Helmet } from 'react-helmet-async';

const IntroPage = () => {
  return (
    <>
      <Helmet>
        <title>AI와 대화</title>
      </Helmet>
      <IntroContainer />
    </>
  );
};

export default React.memo(IntroPage);