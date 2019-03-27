import React from 'react';
import Table from './table';

export default () => {
  return (
    <div className="container">
      <h1>Student Grade Table</h1>
      <Table data={students}/>
    </div>
  )
}

const students = [
  {
    name: 'bob',
    course: 'math',
    grade: 20
  },
  {
    name: 'bobby',
    course: 'mathed',
    grade: 40
  },
  {
    name: 'bobber',
    course: 'maths',
    grade: 60
  }
];
