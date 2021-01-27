import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  
  state = {text: ''}
  
  handleChange = (event) => {
    this.setState({text: event.target.value})
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" 
              onChange={this.handleChange} 
              value={this.state.text} 
              />
          </p>
          <input type="submit" />
        </form>
        {this.state.text} {/* quick-n-dirty state-change confirm */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);

// as alternate to the 'const' and 'export' above, because of how 'connect' handles a no-argument situation (explained poorly, unfortunately):

// export default connect()(CreateTodo);
