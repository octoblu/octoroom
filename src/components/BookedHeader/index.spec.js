import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import moment from 'moment'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import BookedHeader from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<BookedHeader />', () => {
  describe('when there are no meetings', () => {
    it('should render the text "Booked"', () => {
      const meetings = {}
      const sut = mount(<BookedHeader meetings={meetings} />)
      expect(sut).to.have.text("Booked")
    })
  })

  describe('when there is a meeting right now', () => {
    let sut

    beforeEach(() => {
      const meetings = {
        theMeetingId: {
          subject: 'Being Busy',
          startTime: moment.utc().subtract(5, 'minutes').format(),
          endTime:   moment.utc().add(55, 'minutes').format(),
        }
      }
      sut = mount(<BookedHeader meetings={meetings} />)
    })

    it('should render the text "Booked"', () => {
      expect(sut).to.contain.text("Booked")
    })

    it('should render the subject of the booked meeting', () => {
      expect(sut).to.contain.text("Being Busy")
    })
  })
})
