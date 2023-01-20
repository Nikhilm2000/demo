/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Dropdown} from 'semantic-ui-react';

export default function MyDropdown() {
  const options = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
    },
  ];
  return (
    <Dropdown
      data-testid="dropdown"
      options={options}
      defaultValue={options[0].value}
    />
  );
  
}
