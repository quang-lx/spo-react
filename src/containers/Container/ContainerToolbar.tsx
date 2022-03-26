import {Toolbar} from "@fluentui/react-northstar";
import React, {useEffect, useState} from "react";
import {IToolbarItem, MainContainerToolbarProps} from "../../interfaces/ContainerInterfaces";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {processToolbar} from "../../helpers/common";

const ContainerToolbar: React.FunctionComponent<MainContainerToolbarProps> = (props) => {
  const {toolbar} = useSelector((state: RootState) => state.containerReducer);
  const [items, setItems] = useState([] as IToolbarItem[]);

  const dispatch = useDispatch();

  const handleAction = (action) => {
    dispatch(action)
  }

  useEffect(() => {
    setItems(processToolbar(toolbar, handleAction));
  }, [toolbar]);

  useEffect(() => {

  }, [items])

  return (
    <Toolbar
      className="w-100 pr-2"
      aria-label="Toolbar can contain custom content"
      items={items}
    />
  )
}

export default ContainerToolbar;