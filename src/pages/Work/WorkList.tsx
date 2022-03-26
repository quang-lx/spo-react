import * as React from "react";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setToolbar} from "../../store/reducers/containerReducer";
import {IToolbarItem} from "../../interfaces/ContainerInterfaces";

const WorkList: React.FunctionComponent = (props) => {
  // const dispatch = useDispatch();
  // const [toolbarItems, setToolbarItems] = useState([] as IToolbarItem[]);
  //
  // const processToolbar = () => {
  //   dispatch(setToolbar(toolbarItems))
  // }
  //
  // useEffect(() => {
  //   processToolbar();
  // },[])

  return (
    <>Work List</>
  )
}

export default WorkList;