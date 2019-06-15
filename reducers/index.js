import { combineReducers } from 'redux'
import findme from './findme'
import login from './login'
import post from './post'

export default combineReducers ({
  findme,
  login,
  post,
})