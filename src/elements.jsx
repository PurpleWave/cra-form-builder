import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    props.className = 'form-control';
    props.name = this.props.data.field_name;
    if (this.props.read_only) {
      props.disabled = 'disabled';
    }

    return (
      <textarea { ...props } />
    );
  }
}

export {
  TextArea
};