import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

interface CustomScrollbarsProps {
  children: JSX.Element,
  disableHorizontalScrolling?: boolean,
  disableVerticalScrolling?: boolean
}

export const CustomScrollbars: React.FunctionComponent<CustomScrollbarsProps> = (props) => {
  const {children, disableHorizontalScrolling} = props

  const renderTrackHorizontal = (props) => disableHorizontalScrolling
    ? <div {...props} className="track-horizontal hidden"/>
    : <div {...props} className="track-horizontal w-100"/>;

  // const renderTrackVertical = (props) => disableVerticalScrolling
  //   ? <div {...props} className="track-vertical hidden"/>
  //   : <div {...props} className="track-vertical h-100"/>;

  return (
    <Scrollbars
      autoHide
      renderTrackHorizontal={renderTrackHorizontal}
    >
      {children}
    </Scrollbars>
  );
}