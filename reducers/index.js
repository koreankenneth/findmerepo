import { combineReducers } from 'redux'
import findme from './findme'
import login from './login'
import app from './app'

export default combineReducers ({
  findme,
  login,
  app,
})