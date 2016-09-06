import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import BookingIndicator from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<BookingIndicator />', () => {
  it('should render nothing', () => {
    const sut = shallow(<BookingIndicator />)
    expect(sut).to.not.be.empty
  })
})
