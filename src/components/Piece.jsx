import React, { Component } from 'react';
import PIECES from 'constants/assetsMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faTimes } from '@fortawesome/free-solid-svg-icons';

export class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: props.rotate ? props.rotate : 0,
      tempType: props.type,
      tempRotate: props.rotate ? props.rotate : 0,
      type: props.type ? props.type : 'placeholder',
      wheel: false
    };
  }

  showWheel = () => this.setState({ wheel: true });

  hideWheel = () => this.setState({ wheel: false });

  setSelection = type => this.setState({ tempType: type });

  saveSelection = () =>
    this.setState(state => ({
      rotate: state.tempRotate,
      type: state.tempType,
      wheel: false
    }));

  setRotation = rotation => {
    this.setState(state => ({
      tempRotate: Math.abs(state.tempRotate + rotation) === 360 ? 0 : state.tempRotate + rotation
    }));
  };

  render() {
    const {
      state: { rotate, tempType, tempRotate, type, wheel }
    } = this;

    return (
      <div className={`piece piece-${type} ${wheel ? 'show-wheel' : ''}`}>
        <div className={'selection-wheel'}>
          {Object.keys(PIECES).map((key, idx) => {
            return (
              <div
                key={idx}
                className={`quadrant quadrant-${idx}`}
                onClick={() => this.setSelection(key)}
              >
                <img src={PIECES[key]} />
              </div>
            );
          })}
          <div className={'selection-preview'} onClick={() => this.saveSelection()}>
            {tempType && <img className={`rotate-${tempRotate}`} src={PIECES[tempType]} />}
          </div>
          <div className={'selection-rotate-right'} onClick={() => this.setRotation(90)}>
            <FontAwesomeIcon icon={faUndo} />
          </div>
          <div className={'selection-rotate-left'} onClick={() => this.setRotation(-90)}>
            <FontAwesomeIcon icon={faUndo} />
          </div>
          <div className={'selection-close'} onClick={() => this.hideWheel()}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className={'piece-image'} onClick={() => this.showWheel()}>
          {type && <img className={`rotate-${rotate}`} src={PIECES[type]} />}
        </div>
      </div>
    );
  }
}

export default Piece;
