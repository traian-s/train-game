/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { fromEvent } from 'rxjs';
import { throttleTime, switchMap, takeUntil, map } from 'rxjs/operators';

import PropTypes from 'prop-types';

import styles from './Draggable.module';
import PIECES from 'constants/assetsMap';
import { setMoveDropTarget, setMoveHoverTarget, setMovePieceType } from 'store/actions/game';

const Container = ({ pieces, setMoveDropTarget, setMoveHoverTarget, setMovePieceType }) => (
  <div className={styles.container}>
    {pieces.map(
      (piece, idx) => (
        // [...Array(parseInt(piece.count))].map((c, idx) => (
        <Draggable
          type={piece.type}
          key={idx}
          pieceNumber={idx}
          setMoveDropTarget={setMoveDropTarget}
          setMoveHoverTarget={setMoveHoverTarget}
          setMovePieceType={setMovePieceType}
        />
      )
      // ))
    )}
  </div>
);

const Draggable = ({
  pieceNumber,
  setMoveDropTarget,
  setMoveHoverTarget,
  setMovePieceType,
  type
}) => {
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  const [initialX, _setInitialX] = useState(null);
  const [initialY, _setInitialY] = useState(null);

  const initialXRef = useRef(initialX);
  const initialYRef = useRef(initialY);
  const typeRef = useRef(type);
  const timerRef = useRef(null);

  const setInitialX = data => {
    initialXRef.current = data;
    _setInitialX(data);
  };

  const setInitialY = data => {
    initialYRef.current = data;
    _setInitialY(data);
  };

  useEffect(() => {
    typeRef.current = type;
  }, [type]);

  useLayoutEffect(() => {
    const { x, y, width, height } = dragRef.current.getBoundingClientRect();
    setInitialX(x);
    setInitialY(y);

    const mousedown$ = fromEvent(dragRef.current, 'mousedown');
    const mousemove$ = fromEvent(document, 'mousemove');
    const mouseup$ = fromEvent(dragRef.current, 'mouseup');

    const drag$ = mousedown$.pipe(
      switchMap(start => {
        return mousemove$.pipe(
          map(move => {
            move.preventDefault();
            return {
              left: move.clientX - start.offsetX,
              top: move.clientY - start.offsetY,
              clientX: move.clientX,
              clientY: move.clientY
            };
          }),
          takeUntil(mouseup$)
        );
      })
    );

    drag$.subscribe(onDrag); //.unsubscribe(console.log);
    // throttledDrag$.subscribe(onThrottledDrag);
    mouseup$.subscribe(onMouseUp);
    mousedown$.subscribe(onMouseDown); //onMouseDown);

    return function cleanup() {
      mouseup$.unsubscribe();
      mousedown$.unsubscribe();
    };
  }, []);

  const onDrag = ({ left, top, clientX, clientY }) => {
    setPosX(left);
    setPosY(top);
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setMoveHoverTarget({ clientX, clientY });
    }, 500);
  };

  const onThrottledDrag = pos => {
    setMoveHoverTarget({ clientX: pos.left, clientY: pos.top });
  };

  const onMouseDown = () => {
    setMovePieceType(typeRef.current);
  };

  const onMouseUp = evt => {
    const { clientX, clientY } = evt;
    setMoveDropTarget({ clientX, clientY });
    setPosX(initialXRef.current);
    setPosY(initialYRef.current);
  };

  const dragRef = useRef(null);
  return (
    <>
      <div
        className={styles.placeHolder}
        style={{
          // marginLeft: `-${(pieceNumber + 1) * 80}px`,
          left: `calc(60% + ${(pieceNumber + 1) * 80}px)`,
          top: 0
        }}
      >
        <img src={PIECES[type]} />
      </div>
      <div
        className={styles.piece}
        ref={dragRef}
        style={{
          // marginLeft: `-${(pieceNumber + 1) * 80}px`,
          left: posX !== null ? `${posX}px` : `calc(60% + ${(pieceNumber + 1) * 80}px)`,
          top: posY !== null ? `${posY}px` : '0'
        }}
      >
        <img src={PIECES[type]} />
      </div>
    </>
  );
};

Container.propTypes = {
  pieces: PropTypes.array,
  setMoveDropTarget: PropTypes.func,
  setMovePieceType: PropTypes.func
};

Draggable.propTypes = {
  pieceNumber: PropTypes.number,
  type: PropTypes.string,
  setMoveDropTarget: PropTypes.func,
  setMoveHoverTarget: PropTypes.func,
  setMovePieceType: PropTypes.func
};

const mapStateToProps = ({ game: { pieces } }) => ({ pieces });
const mapDispatchToProps = { setMoveDropTarget, setMoveHoverTarget, setMovePieceType };
export default connect(mapStateToProps, mapDispatchToProps)(Container);
