import React from 'react'
import Flexbox from 'react-flexbox'
import Heading from '../Heading/'

import styles from './styles.css'

const Welcome = () => {
  return (
    <Flexbox auto column className={styles.root}>
      <Heading>Welcome!</Heading>
      <div className={styles.body} />
    </Flexbox>
  )
}

export default Welcome
