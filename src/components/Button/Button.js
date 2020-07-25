import React, { PureComponent } from 'react';


export default class Button extends PureComponent {
  render() {
    const {
      onClick,
      type,
      bsClass,
      children,
    } = this.props;
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type}
        className={bsClass}
        onClick={onClick} 
      >
        {children}
      </button>
    );
  }
}

