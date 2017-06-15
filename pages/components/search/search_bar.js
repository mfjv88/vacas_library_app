import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, InputGroup, FormControl, Glyphicon, Button} from 'react-bootstrap';

export default class SearchBar extends React.Component{
  constructor(){
    super();

    this.state = {
      query: ''
    };
  }

  _handleChange(e){
    let query = e.target.value;
    this.setState({
      query: query
    });
  }

  render(){
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          >
          <InputGroup>
            <FormControl
              type="text"
              ref={(input)=> this._query = input}
              placeholder="Search movie here..."
              onChange={this._handleChange.bind(this)}
              />
              <InputGroup.Addon onClick={this._handleSubmit.bind(this)}>
                    <Glyphicon glyph="search"/>
              </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </form>
      )
  }

  _handleSubmit(event){
    event.preventDefault();
    let query = this.state.query;
    
    this.props.searchQuery(query);
  }
}
