import * as React from "react";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setToolbar} from "../../store/reducers/containerReducer";
import {IToolbarRawItem} from "../../interfaces/ContainerInterfaces";
import WorkListTable from "./WorkListTable";
import * as S from "./WorkList.style";
import CustomScrollbars from "../../components/CustomScrollbars";
import {Flex} from "@fluentui/react-northstar";

const WorkList: React.FunctionComponent = (props) => {
  const dispatch = useDispatch();
  const [toolbarItems, setToolbarItems] = useState([] as IToolbarRawItem[]);

  const processToolbar = () => {
    dispatch(setToolbar([
      {
        key: 'approve',
        kind: 'custom',
        fitted: 'horizontally',
        className: "ml-3",
        buttonContent: "Giao cho",
        buttonPrimary: false,
        buttonFlat: true,
        buttonClassName: "p-0 unset-width",
        buttonIcon: "ParticipantAddIcon",
        buttonText: true
      },
      {
        key: 'return',
        kind: 'custom',
        fitted: 'horizontally',
        className: "ml-3",
        buttonContent: "Thời hạn",
        buttonPrimary: false,
        buttonFlat: true,
        buttonClassName: "p-0 unset-width",
        buttonIcon: "MeetingNewIcon",
        buttonText: true
      },
      {
        key: 'reject',
        kind: 'custom',
        fitted: 'horizontally',
        className: "ml-3",
        buttonContent: "Hoàn thành",
        buttonPrimary: false,
        buttonFlat: true,
        buttonClassName: "p-0 unset-width",
        buttonIcon: "AcceptIcon",
        buttonText: true
      },
      {
        key: 'overview',
        kind: 'custom',
        fitted: 'horizontally',
        className: "ml-auto",
        buttonContent: "List",
        buttonFlat: true,
        buttonPrimary: false,
        buttonText: true,
        buttonClassName: "p-0 unset-width"
      },
      {
        key: 'workflow',
        kind: 'custom',
        fitted: 'horizontally',
        className: "ml-3",
        buttonContent: "Board",
        buttonPrimary: false,
        buttonFlat: true,
        buttonClassName: "p-0 unset-width",
        buttonText: true
      },
      {
        key: 'task',
        kind: 'custom',
        fitted: 'horizontally',
        className: "ml-3",
        buttonContent: "Chart",
        buttonPrimary: false,
        buttonFlat: true,
        buttonClassName: "p-0 unset-width",
        buttonText: true
      }
    ]))
  }

  useEffect(() => {
    processToolbar();
  }, [])

  return (
    <Flex column className={"h-100 w-100 work-list"}>
      <CustomScrollbars autoHide={false}>
        <S.WorkListWrapper>
          <WorkListTable/>
        </S.WorkListWrapper>
      </CustomScrollbars>
    </Flex>
  )
}

export default WorkList;