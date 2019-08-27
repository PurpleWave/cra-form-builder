import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

const style = {
  border: '1px dashed grey',
  padding: '0.5rem 1rem',
  marginBottom: '0.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const item = monitor.getItem();
    const dragIndex = item.index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }
    if (dragIndex === -1) {
      item.index = hoverIndex;
      props.insertCard(item.onCreate(item.data), hoverIndex);
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);

    item.index = hoverIndex;
  }
};

export default function(ComposedComponent) {
  class Card extends React.Component {
    render() {
      const {
        isDragging,
        connectDragSource,
        connectDropTarget
      } = this.props;
      const opacity = isDragging ? 0 : 1;

      return connectDragSource(
        connectDropTarget(<div>
          <ComposedComponent { ...this.props } style={{ ...style, opacity }}></ComposedComponent>
        </div>)
      );
    }
  }

  const x = DropTarget('CARD', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))(Card);
  return DragSource('CARD', cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(x);
}