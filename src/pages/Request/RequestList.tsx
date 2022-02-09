import React, {useEffect} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from '../../store';
// import { getList } from '../../store/actions/requestActions';

const RequestList: React.FunctionComponent = () => {
  // const requests = useSelector((state: RootState) => state.requestReducer.requests);

  const testFunction = () => {
    console.log('use effect');
  }

  useEffect(() => {
    testFunction();
  })

  return (
    <div>This is Request List component</div>
  );
}

export default RequestList;