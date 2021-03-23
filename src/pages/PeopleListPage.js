import React from 'react';
import { PeopleList } from '../PeopleList';

const people = [{
    name: 'Kayla',
    age: 2,
    hairColor: 'Black',
  }, {
    name: 'Noella',
    age: 26,
    hairColor: 'blonde',
  }, {
    name: 'Kalvin',
    age: 29,
    hairColor: 'brown',  
  }];

  export const PeopleListPage = () => (
      <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
      </>
  )