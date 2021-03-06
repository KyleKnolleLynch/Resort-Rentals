import React, { Fragment } from 'react';
import Hero from '../mainLayout/Hero';
import Banner from '../mainLayout/Banner';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <Hero>
        <Banner title='error: 404!' subtitle='page not found'>
          <Link to='/' className='btn btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
    </Fragment>
  );
};

export default NotFound;
