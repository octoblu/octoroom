import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { mount } from 'enzyme'

import RoomState from './'

import Heading from '../Heading/'
import Welcome from '../Welcome/'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<RoomState />', () => {
  describe('when peopleInRoom prop is empty', () => {
    it('should render <Welcome />', () => {
      const sut = mount(<RoomState />)
      expect(sut).to.contain(<Welcome />)
    })
  })

  describe('when peopleInRoom prop is specified and not empty', () => {
    describe('when booked property is truthy', () => {
      it('should render <Booked />', () => {
        const sut = mount(
          <RoomState
            peopleInRoom={['a2ab8a7a-cfd7-405f-a7d2-415974af8f2a']}
            booked
          />
        )

        expect(sut).to.contain(<Heading>Room Booked</Heading>)
      })
    })

    describe('when booked property is falsey', () => {
      it('should render <Booked />', () => {
        const sut = mount(
          <RoomState
            peopleInRoom={['a2ab8a7a-cfd7-405f-a7d2-415974af8f2a']}
          />
        )

        expect(sut).to.contain(<Heading>Room Available</Heading>)
      })
    })
  })
})
