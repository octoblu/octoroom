import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { shallow } from 'enzyme'

import NextMeeting from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<NextMeeting />', () => {
  describe('when nextBooking is null', () => {
    it('should render nothing', () => {
      const sut = shallow(<NextMeeting bookings={[]} />)
      expect(sut).to.be.empty
    })
  })
})
