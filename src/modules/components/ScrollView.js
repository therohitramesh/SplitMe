import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui-next/styles';

const styles = {
  root: {
    flex: '1 1 auto',
    overflowY: 'auto',
    minHeight: 0,
    overflowX: 'hidden',
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
  },
  fullHeight: {
    height: '100%',
  },
};

const ScrollView = props => {
  const { children, classes, fullHeight, ...other } = props;

  return (
    <div
      className={classNames(classes.root, {
        [classes.fullHeight]: fullHeight,
      })}
      {...other}
    >
      {children}
    </div>
  );
};

ScrollView.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  fullHeight: PropTypes.bool,
};

ScrollView.defaultProps = {
  fullHeight: false,
};

export default withStyles(styles)(ScrollView);
