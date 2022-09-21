// import { PoweroffOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
// import { Avatar, Button, Form, Input, Popover, Segmented, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Grid, Popup, Image } from "@fluentui/react-northstar";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CallVideoIcon
} from "@fluentui/react-icons-northstar";
// import { useHistory, useLocation } from "react-router-dom";
// import { RootState, useAppDispatch } from "../../store";
// import { logout } from "../../store/authSlice";
// import { avatarURL } from "../../util/avatarUrl";

const Header = () => {
  // const location = useLocation();
  // const [form] = Form.useForm();
  // const dispatch = useAppDispatch();
  // const history = useHistory();

  // const userProfile = useSelector((state: RootState) => state.auth);

  // const [currentUser, setCurrentUser] = useState<any>({});

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if(userProfile.userProfile) {
  //     setTimeout(() => {
  //       setCurrentUser(userProfile.userProfile);
  //       setLoading(false);
  //     }, 1000)
  //   }
  //   else {
  //     setCurrentUser({});
  //   }
  // }, [userProfile.userProfile, userProfile.token])

  // const onFinish = () => {};

  // const onFinishFailed = () => {};

  // const handleLogoutApp = async() => {
  //   await dispatch(logout());
  // }

  // const handleLogoutWeb = () => {
  //   history.push("/Signout");
  // }
  const triggers = {
    position: "above",
    align: "end",
    icon: (
      <ArrowUpIcon
        {...{
          circular: true,
          bordered: true,
        }}
      />
    )
  };
  const PopupWithButton = (props) => (
    <Popup
      align={props.align}
      content={
        <>
        <Button icon={<CallVideoIcon />} text content="Đăng xuất" />
        </>
      }
      pointing
      position={props.position}
      trigger={
        <Image
          styles={{
            width: "42px",
            height: "42px",
            cursor: 'pointer'
          }}
          circular
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
        />
      }
    />
  );

  return (
    <div id="header">
      <div className="container-box">
        <div className="header-container">
          {loading ? (
            <>
              {/* <Skeleton 
              avatar={{
                style: {
                  width: "42px",
                  height: "42px"
                },
                shape: "circle"
              }} 
              paragraph={{rows:0}} 
              active 
              ></Skeleton> */}
            </>
          ) : (
            <>
              {/* <Avatar className="w-h-avata" icon={<UserOutlined />} /> */}
              {process.env.REACT_APP_TYPE_ENV &&
              process.env.REACT_APP_TYPE_ENV === "app" ? (
                // <Popover placement="topLeft" title={false} content={content} trigger="click">
                //   <Button ghost className="header-avatar-button">
                //     {
                //       (avatarURL || "https://alsvietnam.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname=") && userProfile.userProfile?.UserAD?.UserInfo?.UserName ? (
                //         <Avatar
                //           className="w-h-avata"
                //           src={(avatarURL || "https://alsvietnam.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname=") + userProfile.userProfile?.UserAD?.UserInfo?.UserName}
                //         />
                //       ) : (
                //         <Avatar
                //           className="w-h-avata"
                //           icon={<UserOutlined/>}
                //         />
                //       )
                //     }
                //   </Button>
                // </Popover>
                <PopupWithButton
                  align={triggers.align}
                  icon={triggers.icon}
                  position={triggers.position}
                />
              ) : (
                // <Button
                //   ghost
                //   className="header-avatar-button"
                //   onClick={handleLogoutWeb}
                // >
                //   {
                //     (avatarURL || "https://alsvietnam.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname=") && userProfile.userProfile?.UserAD?.UserInfo?.UserName ? (
                //       <Avatar
                //         className="w-h-avata"
                //         src={(avatarURL || "https://alsvietnam.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname=") + userProfile.userProfile?.UserAD?.UserInfo?.UserName}
                //       />
                //     ) : (
                //       <Avatar
                //         className="w-h-avata"
                //         icon={<UserOutlined/>}
                //       />
                //     )
                //   }
                // </Button>
                <div>11111111111</div>
              )}
              <span
                style={{
                  // fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "31px",
                  letterSpacing: "0.33px",
                  color: "#212121",
                  marginLeft: "16px",
                }}
              >
                {/* {currentUser?.Title} */}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
