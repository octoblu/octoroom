import { expect } from 'chai'
import moment from 'moment'
import { getNextMeeting } from './'

describe('Meeting Model', () => {
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

    describe('when given a single meeting with startTime later than today', () => {
      const meetings = {
        '42839fb8-c129-44fb-88f8-c31164717335' : {
          attendees: [],
          startTime: moment().utc().add(1, 'day').format(),
          endTime: moment().utc().add(2, 'days').format(),
          location:"Conf. Octoblu (Tempe)",
          subject: "Tomorrows meeting",
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
  })
})
