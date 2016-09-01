import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { shallow } from 'enzyme'

import Occupied from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Occupied />', () => {
  describe('when there are no people in the room', () => {
    it('should not render', () => {
      const peopleInRoom = []
      const sut = shallow(<Occupied peopleInRoom={peopleInRoom} />)
      expect(sut).to.be.empty
    })
  })
  describe('when there are people in the room', () => {
    it('should render', () => {
      const peopleInRoom = [{
        uuid: '6c149fd3-8013-426a-866c-6dcd99ecceb6',
        name: 'Dr Strange',
        activity: '669f806c-4c97-4d9a-b791-0c525c82ba0d',
      }]
      const sut = shallow(<Occupied peopleInRoom={peopleInRoom} />)
      expect(sut).to.not.be.empty
    })
  })
  // let su
  //
  // beforeEach(() => {
  //   sut = shallow(<Occupied />)
  // })
  //
  // it('should exist', () => {
  //   expect(sut).to.be.present
  // })
})
