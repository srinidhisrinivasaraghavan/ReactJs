import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser(props){
  return function(dispatch){
      //Submit email, password to server
    axios.post(`${ROOT_URL}/signin`,props)
    .then((response)=>{
      //If request is good,
        // - update state (token)
        dispatch({type: AUTH_USER});

        localStorage.setItem('token', response.data.token);

        // - redirect to route '/feature'
        browserHistory.push('/feature');
    })
    .catch(()=>{
      console.log('catch');
        dispatch(authError('Bad Login Info'));
    })
  }
}

export function authError(error){
  console.log('1');
  return{
    type:AUTH_ERROR,
    payload:error
  }
}

export function signoutUser(){
  //get rid of token
  localStorage.removeItem('token');
  return{
    type:UNAUTH_USER
  }
}

export function signupUser({email,password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`,{email,password})
    .then((response)=>{
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
    })
    .catch(()=>{
        dispatch(authError('Bad Signup Info'));
    })
  }
}
