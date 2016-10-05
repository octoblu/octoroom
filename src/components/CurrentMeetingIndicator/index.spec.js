import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import moment from 'moment'
import React from 'react'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import CurrentMeetingIndicator from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<CurrentMeetingIndicator />', () => {
  describe('when currentMeeting prop is not provided', () => {
    it('should default currentMeeting prop to null', () => {
      const sut = mount(<CurrentMeetingIndicator />)
      expect(sut).to.have.prop('currentMeeting', null)
    })
  })

  describe('when currentMeeting prop is provided and empty', () => {
    it('should render nothing', () => {
      const sut = shallow(<CurrentMeetingIndicator currentMeeting={{}}/>)
      expect(sut).to.be.blank()
    })
  })

  describe('when currentMeeting prop is provided and not empty', () => {
    describe('when currentMeeting has a subject', () => {
      it('should render the Header with a subject', () => {
        const currentMeeting = {
          subject: 'cats',
        }
        const sut = mount(<CurrentMeetingIndicator currentMeeting={currentMeeting} />)
        expect(sut).to.contain.text("cats")
      })
    })

    describe('when currentMeeting has a endTime', () => {
      it('should render the header with the formatted time', () => {
        const now = moment.utc()
        const currentMeeting = {
          endTime: now
        }
        const sut = mount(<CurrentMeetingIndicator currentMeeting={currentMeeting} />)
        expect(sut).to.contain.text(`Booked until ${moment(now).format('h:mm')}`)
      })
    })
  })
})
