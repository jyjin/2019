import styles from './index.css';
import React from 'react';

function mixins(obj) {
  return function (target) {
    // Object.assign(target.prototype, ...obj)
    // target.constructor({...target, ...obj})
    console.log('obj == ', obj)
    console.log('constructor == ', target.constructor)
    // target.constructor = function(){

    // }
  } 
}

const Foo = {
  foo(props) {  console.log('c props == ', props)}
};

@mixins({name: 'jyjin'})
class App extends React.Component{

  constructor(props){
    super(props)
    console.log('props con == ', this.props)
  }

  render(){
    console.log('props render == ', this.props)

    return <div>
      Hello decoreator
    </div>
  }
}


export default App

