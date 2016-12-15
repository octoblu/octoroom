import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string
}

const DashboardHeader = ({ clientUrl }) => {
  return (
    <Flexbox auto className={styles.header}>
     <span>
       <img
         src="//cdn.octoblu.com/images/citrix-logo-reverse.png"
         alt="Citrix"
         className={styles.citrixLogo}
       />
     </span>
     {
       clientUrl &&
       <div>
         Join the Room <strong>{clientUrl}</strong>
       </div>
     }
   </Flexbox>
  )
}

DashboardHeader.propTypes = propTypes


export default DashboardHeader
