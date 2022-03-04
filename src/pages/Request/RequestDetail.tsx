import React, {useEffect} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from '../../store';
// import { getList } from '../../store/actions/requestActions';
import {Popup, Button, Animation} from '@fluentui/react-northstar';
import {MoreIcon} from '@fluentui/react-icons-northstar';

const RequestDetail: React.FunctionComponent = () => {
  // const requests = useSelector((state: RootState) => state.requestReducer.requests);

  const testFunction = () => {
    // console.log('use effect');
  }

  useEffect(() => {
    testFunction();
  })

  return (
    <Popup trigger={<Button icon={<MoreIcon />} title="Show popup" />}
           content={<Animation name="slideDownEnterNormal"><div>Hello</div></Animation>}
    />
  );
}

export default RequestDetail;