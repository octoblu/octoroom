import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import RoomState from './'

import Booked from '../Booked/'
import Empty from '../Empty/'
import Occupied from '../Occupied/'
import SkypeInSession from '../SkypeInSession/'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<RoomState />', () => {
  describe('when genisys prop is empty', () => {
    it('should default genisys prop to null', () => {
      const sut = mount(<RoomState />)
      expect(sut).to.have.prop('genisys', null)
    })
  })


  describe('when genisys prop is specified', () => {
    describe('when booked property is truthy', () => {
      const genisys = { booked: true, peopleInRoom: ['a2ab8a7a-cfd7-405f-a7d2-415974af8f2a'] }

      it('should render <Booked />', () => {
        const sut = mount(<RoomState genisys={genisys} />)
        expect(sut).to.contain(<Booked />)
      })
    })

    describe('when the peopleInRoom prop is not empty', () => {
      const genisys = { peopleInRoom: ['46f4ab1a-1a43-48e4-8d9b-fdd1d9a2919e'] }

      it('should render <Occupied />', () => {
        const sut = mount(<RoomState genisys={genisys} />)
        expect(sut).to.contain(<Occupied />)
      })
    })

    describe('when the peopleInRoom prop is empty', () => {
      const genisys = { peopleInRoom: [] }

      it('should render <Occupied />', () => {
        const sut = mount(<RoomState genisys={genisys} />)
        expect(sut).to.contain(<Empty />)
        expect(sut).to.not.contain(<Booked />)
        expect(sut).to.not.contain(<SkypeInSession />)
        expect(sut).to.not.contain(<Occupied />)
      })
    })

    describe('when inSkype prop is truthy', () => {
      const genisys = { inSkype: true, peopleInRoom:['e9501b11-4bc9-4913-b903-922e3be71a79']}

      it('should render <SkypeInSession />', () => {
        const sut = mount(<RoomState genisys={genisys} />)
        expect(sut).to.contain(<SkypeInSession />)
      })
    })
  })
})
