import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import OccupantList from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<OccupantList />', () => {
  it('should render nothing', () => {
    const sut = shallow(<OccupantList />)
    expect(sut).to.be.empty
  })
})
