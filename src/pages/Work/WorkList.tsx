import * as React from "react";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setToolbar} from "../../store/reducers/containerReducer";
import {IToolbarRawItem} from "../../interfaces/ContainerInterfaces";
import WorkListTable from "./WorkListTable";
import * as S from "./WorkList.style";

const WorkList: React.FunctionComponent = (props) => {
  const dispatch = useDispatch();
  const [toolbarItems, setToolbarItems] = useState([] as IToolbarRawItem[]);

  const processToolbar = () => {
    dispatch(setToolbar(toolbarItems))
  }

  useEffect(() => {
    processToolbar();
  },[])

  return (
    <S.WorkListWrapper>
      <WorkListTable/>
    </S.WorkListWrapper>
  )
}

export default WorkList;