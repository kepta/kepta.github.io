import React from 'react';

export default class Sample extends React.Component {
  state = {
    magic: false,
  }
  render() {
    return (
      <div>
        <h3 className="magical" onClick={() => 'ere'}>hola</h3>
      </div>
    );
  }
}
