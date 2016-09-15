import { expect } from 'chai'
import moment from 'moment'
import { getCurrentMeeting, getNextMeeting } from './'

describe('Meeting Model', () => {
  describe('getCurrentMeeting()', () => {
    describe('when given an empty list of meetings', () => {
      it('should return null', () => {
        const meetings = {}
        expect(getCurrentMeeting(meetings)).to.equal(null)
      })
    })

    describe('when given single meeting going on right now', () => {
      it('should return the meeting', () => {
        const meetings = {
          '9dad28e8-bfb8-47ef-9b0f-e752e6f69ce0': {
            subject: 'Business, Business',
            startTime: moment().utc().subtract(15, 'minutes').format(),
            endTime:   moment().utc().add(15, 'minutes').format(),
          }
        }
        expect(getCurrentMeeting(meetings)).to.equal(meetings['9dad28e8-bfb8-47ef-9b0f-e752e6f69ce0'])
      })
    })

    describe('when given two meetings, one in the past, one happening right now', () => {
      it('should return the meeting', () => {
        const meetings = {
          '01b2431e-d41a-4cfa-88cb-a8d572bbbcbc': {
            subject: 'Business, Business',
            startTime: moment().utc().subtract(60, 'minutes').format(),
            endTime:   moment().utc().subtract(30, 'minutes').format(),
          },
          'e04fb886-3341-4352-82ff-434722325856': {
            subject: 'Moar Business',
            startTime: moment().utc().subtract(15, 'minutes').format(),
            endTime:   moment().utc().add(15, 'minutes').format(),
          }
        }
        expect(getCurrentMeeting(meetings)).to.equal(meetings['e04fb886-3341-4352-82ff-434722325856'])
      })
    })

    describe('when given two meetings, one in the past, one in the future', () => {
      it('should return null', () => {
        const meetings = {
          '01b2431e-d41a-4cfa-88cb-a8d572bbbcbc': {
            subject: 'Business, Business',
            startTime: moment().utc().subtract(60, 'minutes').format(),
            endTime:   moment().utc().subtract(30, 'minutes').format(),
          },
          'e04fb886-3341-4352-82ff-434722325856': {
            subject: 'Business, Business',
            startTime: moment().utc().add(15, 'minutes').format(),
            endTime:   moment().utc().add(30, 'minutes').format(),
          }
        }
        expect(getCurrentMeeting(meetings)).to.equal(null)
      })
    })
  })

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
})
