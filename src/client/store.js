import { createStore } from 'redux'

import siteReducer from 'reducers/site-reducer'

const store = createStore(siteReducer)

export default store
