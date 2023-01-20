/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import { Alert } from 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import App from '../App';
import 'isomorphic-fetch';
import Users from '../users';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App/>);
});

it('Component: toMatchSnapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('App Flow Check', async ()  => {
  const push = jest.fn();
  jest.spyOn(Alert, 'alert');
  const {getByTestId,getByPlaceholderText} = render(<App/>)
  fireEvent.changeText(getByPlaceholderText(/Email./i), "demo@gmail.com")
  fireEvent.changeText(getByPlaceholderText(/Password./i), "1234")
  fireEvent.press(getByTestId('touchable'))
  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Success')
  });
});

it('wrong data', async ()  => {
  const push = jest.fn();
  jest.spyOn(Alert, 'alert');
  const {getByTestId,getByPlaceholderText} = render(<App/>)
  fireEvent.changeText(getByPlaceholderText(/Email./i), "n@gmail.com")
  fireEvent.changeText(getByPlaceholderText(/Password./i), "123456")
  fireEvent.press(getByTestId('touchable'))
  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Failure')
  });
});

it('no data', async ()  => {
  const push = jest.fn();
  jest.spyOn(Alert, 'alert');
  const {getByTestId,getByPlaceholderText} = render(<App/>)
  fireEvent.changeText(getByPlaceholderText(/Email./i), "")
  fireEvent.changeText(getByPlaceholderText(/Password./i), "")
  fireEvent.press(getByTestId('touchable'))
  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Failure')
  });
});

it('only email', async ()  => {
  const push = jest.fn();
  jest.spyOn(Alert, 'alert');
  const {getByTestId,getByPlaceholderText} = render(<App/>)
  fireEvent.changeText(getByPlaceholderText(/Email./i), "nikhil")
  fireEvent.changeText(getByPlaceholderText(/Password./i), "")
  fireEvent.press(getByTestId('touchable'))
  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Failure')
  });
});



it('Api test case',async function(){

  global.fetch=jest.fn().mockImplementation(()=>{
      var p = new Promise((resolve,reject)=>{
          resolve({
              json:function()
              {App
                  return {Id:2};
              }
          })
      })
      return p;
  })
  const response=await Users.all();
  console.warn(response)
  expect(response.Id).toBe(2)
});


// it('only', async function (){
// const response = await Users.all();
// console.warn(response.movies[3].title);
// expect(response.movies[3].title).toEqual('The Matrix')

// });


