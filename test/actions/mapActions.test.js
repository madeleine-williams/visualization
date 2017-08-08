/* eslint-env jest */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import actions from 'actions'
import { switchBranch } from 'actions/mapActions'

const mockStore = configureMockStore([thunk])

describe('switchBranch', () => {
  it('dispatches a switch layer action', () => {
    const store = mockStore({ mapDataReducer: { statsFiles: [] }, mapControllerReducer: {} })

    store.dispatch(switchBranch('federal'))

    expect(store.getActions()).toEqual([{ type: actions.MAP_SWITCH_LAYER, year: null, branch: 'federal' }])
  })
})
