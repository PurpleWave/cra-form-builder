import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { TextArea } from './elements';
import Target from './target';
import DraggableItem from './draggableItem';

const item = {
  key: 'TextArea',
  canHaveAnswer: true,
  name: 'Multi-line Input',
  label: 'Placeholder Label',
  icon: 'fa fa-text-height',
  field_name: 'text_area_'
};

const NewTextArea = Target(TextArea);

export default class CRAFormBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  _onClick(item) {
    console.log(item);
  }

  render() {
    return (
      <DndProvider backend={ HTML5Backend }>
        <div>Hi!</div>
        <NewTextArea
          data={ item }
          read_only={ true }
          key={ item.key }
          onClick={ this._onClick.bind(this, item) }
        />
      </DndProvider>
    );
  }
}