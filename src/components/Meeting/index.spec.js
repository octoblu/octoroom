import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Meeting from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Meeting />', () => {
  it('if there are no bookings it should render nothing', () => {
    const sut = shallow(<Meeting />)
    expect(sut).to.be.empty
  })
})
