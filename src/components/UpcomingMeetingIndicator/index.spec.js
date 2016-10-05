import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { shallow } from 'enzyme'

import UpcomingMeetingIndicator from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<UpcomingMeetingIndicator />', () => {
  describe('when nextBooking is null', () => {
    it('should render nothing', () => {
      const sut = shallow(<UpcomingMeetingIndicator bookings={[]} />)
      expect(sut).to.be.empty
    })
  })
})
