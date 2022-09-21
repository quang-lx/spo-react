import { createBrowserHistory } from 'history'
import {IToolbarItem, IToolbarRawItem} from "../interfaces/ContainerInterfaces";
import {Button, Text} from "@fluentui/react-northstar";
import {Icon} from "../components/Icon";

export const history = createBrowserHistory()

export const processToolbar = (items: IToolbarRawItem[], handleAction: any): IToolbarItem[] => {
  let resp: IToolbarItem[] = [];

  if(items?.length) {
    for(let index in items) {
      let item = items[index];
      resp = [...resp, {
        key: item.key,
        kind: item.kind,
        content: <Button
          content={item.buttonText ? <Text weight={"regular"} content={item.buttonContent}/> : <Text content={item.buttonContent}/>}
          flat={item.buttonFlat}
          primary={item.buttonPrimary}
          tinted={item.buttonTinted}
          className={item.buttonClassName}
          icon={item.buttonIcon ? <Icon name={item.buttonIcon} /> : undefined}
          text={item.buttonText}
          onClick={() => {if(item.buttonAction) { handleAction({type: item.buttonAction, payload: item.actionPayload}) } }}
        />,
        fitted: item.fitted,
        className: item.className
      }]
    }
  }

  return resp
}