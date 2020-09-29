import {createStore } from 'redux'
import {reducer} from './reducer'
import ActionTypes from './actionTypes'

export const store = createStore(reducer)