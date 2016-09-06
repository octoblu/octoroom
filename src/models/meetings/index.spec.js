import _ from 'lodash'
import chai, { expect } from 'chai'
import moment from 'moment'
import { getNextMeeting } from './'

describe('getNextMeeting()', () => {
  describe('when padding in an empty list of meetings', () => {
    it('should return null', () => {
      expect(getNextMeeting({})).to.equal(null)
    })
  })

  describe('when given a single meeting with a startTime in the past', () => {
    const meetings = {
      '42839fb8-c129-44fb-88f8-c31164717335' : {
        attendees: [],
        endTime: moment().utc().subtract(15, 'minutes').format(),
        startTime: moment().utc().subtract(1, 'hour').format(),
        location:"Conf. Octoblu (Tempe)",
        subject: "Roy van de Water 1 vs 1",
      },
    }

    it('should return null', () => {
      expect(getNextMeeting(meetings)).to.equal(null)
    })
  })

  describe('when given a single meeting with a startTime in the future', () => {
    const meetings = {
      '42839fb8-c129-44fb-88f8-c31164717335' : {
        attendees: [],
        startTime: moment().utc().add(30, 'minutes').format(),
        endTime: moment().utc().add(60, 'minutes').format(),
        location:"Conf. Octoblu (Tempe)",
        subject: "Roy van de Water 1 vs 1",
      },
    }

    it('should return the meeting', () => {
      expect(getNextMeeting(meetings)).to.deep.equal(meetings['42839fb8-c129-44fb-88f8-c31164717335'])
    })
  })

  describe('when given a meetings', () => {
    const meetings = {
      '54df2733-f044-48e0-b87c-c7c652afaf7f' : {
        attendees: [],
        startTime: moment().utc().add(30, 'minutes').format(),
        endTime: moment().utc().add(60, 'minutes').format(),
        location:"Conf. Octoblu (Tempe)",
        subject: "Future Meeting 2",
      },
      '42839fb8-c129-44fb-88f8-c31164717335' : {
        attendees: [],
        startTime: moment().utc().subtract(1, 'hour').format(),
        endTime: moment().utc().subtract(15, 'minutes').format(),
        location:"Conf. Octoblu (Tempe)",
        subject: "Meeting from the past",
      },
      '7ebe6ee4-96cf-4cdd-9247-04faf1b5b8cc' : {
        attendees: [],
        startTime: moment().utc().add(15, 'minutes').format(),
        endTime: moment().utc().add(30, 'minutes').format(),
        location:"Conf. Octoblu (Tempe)",
        subject: "Future Meeting 1",
      },
    }

    it('should return the first meeting with a startTime in the future', () => {
      expect(getNextMeeting(meetings)).to.deep.equal(meetings['7ebe6ee4-96cf-4cdd-9247-04faf1b5b8cc'])
    })
  })
})
