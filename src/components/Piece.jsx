import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PIECES from 'constants/assetsMap';
import { PIECE_TYPES } from 'constants/pieces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faTimes } from '@fortawesome/free-solid-svg-icons';

export class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowRotate: false,
      rotate: props.rotate ? props.rotate : 0,
      tempType: props.type,
      tempRotate: props.rotate ? props.rotate : 0,
      wheel: false
    };
  }

  showWheel = () => this.setState({ wheel: true });

  hideWheel = () => this.setState({ wheel: false });

  setSelection = type =>
    this.setState({ tempType: type, allowRotate: PIECE_TYPES[type].allowRotate });

  saveSelection = () => {
    this.hideWheel();
    this.props.setPiece(this.props.x, this.props.y, this.state.tempType, this.state.tempRotate);
    this.props.makeMove();
  };

  setRotation = rotation => {
    this.setState(state => ({
      tempRotate: Math.abs(state.tempRotate + rotation) === 360 ? 0 : state.tempRotate + rotation
    }));
  };

  render() {
    const {
      props: { type, rotate, stage },
      state: { tempType, tempRotate, wheel, allowRotate }
    } = this;

    return (
      <div className={`piece piece-${type} ${wheel ? 'show-wheel' : ''}`}>
        <div className={'selection-wheel'}>
          {Object.keys(PIECES)
            .filter(piece => stage.piece.includes(piece))
            .map((key, idx) => {
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
          {allowRotate && (
            <>
              <div className={'selection-rotate-right'} onClick={() => this.setRotation(90)}>
                <FontAwesomeIcon icon={faUndo} />
              </div>
              <div className={'selection-rotate-left'} onClick={() => this.setRotation(-90)}>
                <FontAwesomeIcon icon={faUndo} />
              </div>
            </>
          )}
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

Piece.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  type: PropTypes.string,
  rotate: PropTypes.number,
  setPiece: PropTypes.func,
  makeMove: PropTypes.func,
  stage: PropTypes.object
};

export default Piece;
