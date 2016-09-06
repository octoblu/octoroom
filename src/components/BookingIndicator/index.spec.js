import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import BookingIndicator from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<BookingIndicator />', () => {
  describe('when nextBooking is null', () => {
    it('should render nothing', () => {
      const sut = shallow(<BookingIndicator bookings={[]} />)
      expect(sut).to.be.empty
    })
  })
})
