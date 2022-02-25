import React, {useEffect} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from '../../store';
// import { getList } from '../../store/actions/requestActions';
import { Avatar, Button } from '@fluentui/react-northstar';
import { BellIcon } from '@fluentui/react-icons-northstar';

const RequestList: React.FunctionComponent = () => {
  // const requests = useSelector((state: RootState) => state.requestReducer.requests);

  const testFunction = () => {
    // console.log('use effect');
  }

  useEffect(() => {
    testFunction();
  })

  return (
    <div className="test">
      <Avatar name="User Profile"/>
      <Button iconOnly icon={<BellIcon />} title="Button" text />
    </div>
  );
}

export default RequestList;