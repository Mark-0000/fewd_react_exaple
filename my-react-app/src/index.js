import React from 'react';
import ReactDOM from 'react-dom';



ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>Good Bye</h1>,
  document.getElementById('others')


);

function MyName(props){
    return <h1>The name {props.name} contains {props.number} characters!</h1>;
}
const name1 = <MyName name="Erika" number="5" />
const name2 = <MyName name="George" number="6" />
const name3 = <MyName name="Phillip" number="7" />

ReactDOM.render(
  name1,
  document.getElementById('name1')
);
ReactDOM.render(
  name2,
  document.getElementById('name2')
);
ReactDOM.render(
  name3,
  document.getElementById('name3')
);