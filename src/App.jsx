import React, {Component} from 'react';
import { connect } from 'react-redux';
import Heading from './Heading.jsx';
import Nav from './Nav.jsx';
import Table from './Table.jsx';

class App extends Component {
  render() {
    console.log('Rendering <App/>');
    return (

      <div className="wrapper">

        <Nav />
        <main>
          <Heading />
          <Table />
        </main>

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    someProp: state.someProp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    somePropFunction: function() {
      const action = { type: 'ADD_CONTACT', contact: { id: 1, name: "Bob" } };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
