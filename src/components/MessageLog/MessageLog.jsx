import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MessageLog.module.scss';

const MessageLog = ({ messages = [] }) => {
  console.log(styles);

  return (
    <ul className={styles.messageLog}>
      {messages.map((message, idx) => (
        <li key={idx}>{message}</li>
      ))}
    </ul>
  );
};

MessageLog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = ({ messageLog: { messages } }) => ({ messages });

export default connect(mapStateToProps)(MessageLog);
