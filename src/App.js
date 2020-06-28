import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreators from './store/actions';

class App extends Component {
  
  componentDidMount() {
    
  }
  
  render() {
      return (
        <div className="App container">
          <div className="row">
            <div className="col-6">
              <form onSubmit={(event) => this.props.submitFormHandler(event, this.props.inputText)}>
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Enter Text Here... "
                  value={this.props.inputText}
                  onChange={(event) => this.props.onChangeHandler(event)}/>
                <button 
                  className="btn btn-block btn-outline-success" 
                  type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

const mapStateToProps = state => {
  return {
    inputText: state.inputText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitFormHandler: (event, value) => dispatch(actionCreators.submitForm(event, value)),
    onChangeHandler: event => dispatch(actionCreators.onChange(event))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
