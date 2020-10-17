import React from 'react';

class nameInput extends React.Component{
	state = {};

	handleChange = (C) => {
		this.setState({name: C.target.value});
	};
	handleClick = (C) => {
		C.preventDefault();
		this.props.name(this.state.name, false);
	};
	render() {
    return (
      <div className="wrapper">
        <div className="nameInput">
          <form>
            <div className="form-group">
              <label>Nome</label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>

            <button onClick={this.handleClick} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default nameInput;