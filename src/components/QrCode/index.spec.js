import _ from 'lodash'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import QrCode from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<QrCode />', () => {
  it('should render nothing', () => {
    const sut = shallow(<QrCode />)
    expect(sut).to.be.empty
  })
})
