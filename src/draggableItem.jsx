import React from 'react';
import { DragSource } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {
      id: 1,
      index: -1,
      data: props.data,
      onCreate: props.onCreatee
    };
  }
};

class DraggableItem extends React.Component {
  render() {
    const { connectDragSource, data, onClick } = this.props;
    if (!connectDragSource) return null;
    return (
      connectDragSource(
        <li onClick={ onClick }><i className={ data.icon }></i>{ data.name }</li>
      )
    );
  }
}

export default DragSource('CARD', cardSource, connect => ({
  connectDragSource: connect.dragSource()
}))(DraggableItem);