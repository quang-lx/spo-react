// import { UserOutlined } from "@ant-design/icons";
// import { Avatar, Segmented } from "antd";
// import Icon from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import bell from "./svg/bell.svg";
import work from "./svg/work.svg";
import teams from "./svg/teams.svg";
import calendar from "./svg/calendar.svg";
import more from "./svg/more.svg";
// import { useHistory, useLocation } from "react-router-dom";
// import { ROUTES } from "../../constants/RouteConst";
// import { RootState, useAppDispatch } from "../../store";
// import { getListNotifications } from "../../store/notificationsSlice";
import { useSelector } from "react-redux";
import _ from "lodash";
// import { resetFilterWork, resetListWork } from "../../store/worksSlice";
// import * as Socket from '../../../src/util/soket';
import { Menu, Flex } from "@fluentui/react-northstar";
import {
  BellIcon,
  WorkOrSchoolIcon,
  AudienceIcon,
  CalendarIcon,
  MoreIcon,
} from "@fluentui/react-icons-northstar";

const Footer = () => {
  // const history = useHistory();

  // const location = useLocation();

  // const dispatch = useAppDispatch();

  //   const notificationsReducer = useSelector((state: RootState) => state.notifications);
  //   const { authUser, loading: isLoadingUser, token, userProfile } = useSelector((state: RootState) => state.auth);
  //   const [locationValue, setLocationValue] = useState(1);

  //   const [unreadCount, setUnreadCount] = useState<number>(0);

  //   const [mySocket, setMySocket] = useState<any>();

  //   useEffect(() => {
  //       if(location.pathname.includes(ROUTES.NOTIFICATIONS)) {
  //           setLocationValue(1);
  //       }
  //       else if (location.pathname.includes(ROUTES.WORKS)) {
  //           setLocationValue(2);
  //       }
  //   }, [location.pathname]);

  //   useEffect(() => {
  //     if(token && (token != null || token != undefined) && !_.isNil(userProfile))
  //     {
  //       const fetchNotifications = async () => {
  //           const query = {};
  //           await dispatch(getListNotifications(query));
  //       }
  //       fetchNotifications();

  //     }
  // }, [])

  //   useEffect(() => {
  //     if(notificationsReducer.listNotifications && notificationsReducer.listNotifications.length > 0) {

  //         const id = userProfile?.UserAD?.LookupId;

  //         const temp = notificationsReducer.listNotifications;

  //         const count = temp.filter(
  //           (item: any) =>
  //             item.ChuaXem && item.ChuaXem.length > 0 && item.ChuaXem.some((x: any) => x.LookupId === id )
  //         ).length

  //         // console.log("count", count, temp)

  //         setUnreadCount(count);
  //     }
  //     else {
  //         setUnreadCount(0);
  //     }
  //   }, [notificationsReducer.listNotifications, userProfile?.UserAD?.LookupId]);

  //   useEffect(()=>{
  //     if(userProfile?.UserAD?.LookupId) {
  //         connectSocket();
  //     }
  //   }, [userProfile?.UserAD?.LookupId]);

  //   useEffect(() => {
  //   if (mySocket && userProfile.UserAD && userProfile.UserAD.LookupId) {
  //     mySocket.on('connect', function (data) {
  //         console.log('Kết nối máy chủ thành công ở footer', data);
  //       });
  //     mySocket.on("message", async (data) => {
  //       console.log('messagemessagemessagemessagemessaged noti',data);
  //       setUnreadCount(prev => prev + 1);
  //     })

  //   }
  //   }, [mySocket]);

  //   const connectSocket = async () => {

  //     const temp = await Socket.Connect_Socket();
  //     setMySocket(temp);
  //   }
  const items = [
    {
      icon: (
        <svg
          style={{
            width: "24px",
            height: "24px",
          }}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.206 2.52637C16.256 2.52637 19.5627 5.72111 19.7019 9.77542L19.706 10.0264V14.1233L21.086 17.2794C21.1551 17.4373 21.1907 17.6078 21.1907 17.7801C21.1907 18.4705 20.6311 19.0301 19.9407 19.0301L15.206 19.0316C15.206 20.6885 13.8629 22.0316 12.206 22.0316C10.6084 22.0316 9.30238 20.7827 9.21114 19.2079L9.20559 19.0294L4.48091 19.0301C4.30957 19.0301 4.14006 18.9949 3.98291 18.9267C3.3497 18.6516 3.05936 17.9153 3.33439 17.2821L4.70604 14.1243V10.0263C4.70664 5.87147 8.05813 2.52637 12.206 2.52637ZM13.7056 19.0294L10.706 19.0316C10.706 19.8601 11.3776 20.5316 12.206 20.5316C12.9857 20.5316 13.6265 19.9368 13.6992 19.1761L13.7056 19.0294ZM12.206 4.02637C8.88588 4.02637 6.20652 6.70062 6.20604 10.0264V14.436L4.86206 17.5301H19.5586L18.206 14.4369L18.2062 10.0392L18.2024 9.81402C18.0913 6.58055 15.4476 4.02637 12.206 4.02637Z"
            fill="#006C98"
          />
        </svg>
      ),
      key: "Thông báo",
    },
    {
      icon: (
        <svg
          style={{
            width: "24px",
            height: "24px",
          }}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 4.78015C5.5 4.36594 5.83579 4.03015 6.25 4.03015H12V8.53015C12 9.63472 12.8954 10.5302 14 10.5302H18.5V20.2802C18.5 20.6944 18.1642 21.0302 17.75 21.0302H13V22.5302H17.75C18.9926 22.5302 20 21.5228 20 20.2802V10.1944C20 9.73024 19.8156 9.28512 19.4874 8.95693L13.5732 3.04271C13.245 2.71453 12.7999 2.53015 12.3358 2.53015H6.25C5.00736 2.53015 4 3.53751 4 4.78015V12.7977C4.29418 12.6275 4.63572 12.5301 5.00002 12.5301L5.5 12.5301V4.78015ZM17.4393 9.03015H14C13.7239 9.03015 13.5 8.80629 13.5 8.53015V5.09081L17.4393 9.03015ZM4 16.5302V15.0302C4 14.2017 4.67157 13.5302 5.5 13.5302H7.5C8.32843 13.5302 9 14.2017 9 15.0302V16.5302H10.5C11.3284 16.5302 12 17.2017 12 18.0302L12 19.5302H9V19.0302C9 18.754 8.77614 18.5302 8.5 18.5302C8.22386 18.5302 8 18.754 8 19.0302V19.5302H5V19.0302C5 18.754 4.77614 18.5302 4.5 18.5302C4.22386 18.5302 4 18.754 4 19.0302V19.5302H1V18.0302C1 17.2017 1.67157 16.5302 2.5 16.5302H4ZM5 15.0302V16.5302H8V15.0302C8 14.754 7.77614 14.5302 7.5 14.5302H5.5C5.22386 14.5302 5 14.754 5 15.0302ZM9 20.5302H12L12 22.0302C12 22.8586 11.3284 23.5302 10.5 23.5302H2.5C1.67157 23.5302 1 22.8586 1 22.0302V20.5302H4V21.0302C4 21.3063 4.22386 21.5302 4.5 21.5302C4.77614 21.5302 5 21.3063 5 21.0302V20.5302H8V21.0302C8 21.3063 8.22386 21.5302 8.5 21.5302C8.77614 21.5302 9 21.3063 9 21.0302V20.5302Z"
            fill="#212121"
          />
        </svg>
      ),
      key: "Công việc",
    },
    {
      icon: (
        <svg
          style={{
            width: "24px",
            height: "24px",
          }}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.254 10.8231C16.2205 10.8231 17.004 11.6066 17.004 12.5731V17.3221C17.004 19.8079 14.9888 21.8231 12.503 21.8231C10.0171 21.8231 8.00193 19.8079 8.00193 17.3221V12.5731C8.00193 11.6066 8.78543 10.8231 9.75193 10.8231H15.254ZM15.254 12.3231H9.75193C9.61386 12.3231 9.50193 12.435 9.50193 12.5731V17.3221C9.50193 18.9795 10.8455 20.3231 12.503 20.3231C14.1604 20.3231 15.504 18.9795 15.504 17.3221V12.5731C15.504 12.435 15.3921 12.3231 15.254 12.3231ZM4.25 10.8231L7.63128 10.8222C7.28791 11.2376 7.06424 11.7556 7.01312 12.3233L4.25 12.3231C4.11193 12.3231 4 12.435 4 12.5731V15.8219C4 17.2033 5.11984 18.3231 6.50124 18.3231C6.70123 18.3231 6.89574 18.2996 7.08216 18.2553C7.16687 18.7592 7.32156 19.2399 7.53487 19.6871C7.20577 19.7762 6.85899 19.8231 6.50124 19.8231C4.29142 19.8231 2.5 18.0317 2.5 15.8219V12.5731C2.5 11.6066 3.2835 10.8231 4.25 10.8231ZM17.3747 10.8222L20.75 10.8231C21.7165 10.8231 22.5 11.6066 22.5 12.5731V15.8231C22.5 18.0323 20.7091 19.8231 18.5 19.8231C18.1436 19.8231 17.798 19.7765 17.4691 19.689C17.684 19.2409 17.8388 18.7602 17.925 18.2562C18.1092 18.3001 18.3019 18.3231 18.5 18.3231C19.8807 18.3231 21 17.2038 21 15.8231V12.5731C21 12.435 20.8881 12.3231 20.75 12.3231L17.9928 12.3233C17.9417 11.7556 17.718 11.2376 17.3747 10.8222ZM12.5 3.82312C14.1569 3.82312 15.5 5.16627 15.5 6.82312C15.5 8.47997 14.1569 9.82312 12.5 9.82312C10.8431 9.82312 9.5 8.47997 9.5 6.82312C9.5 5.16627 10.8431 3.82312 12.5 3.82312ZM19 4.82312C20.3807 4.82312 21.5 5.94241 21.5 7.32312C21.5 8.70383 20.3807 9.82312 19 9.82312C17.6193 9.82312 16.5 8.70383 16.5 7.32312C16.5 5.94241 17.6193 4.82312 19 4.82312ZM6 4.82312C7.38071 4.82312 8.5 5.94241 8.5 7.32312C8.5 8.70383 7.38071 9.82312 6 9.82312C4.61929 9.82312 3.5 8.70383 3.5 7.32312C3.5 5.94241 4.61929 4.82312 6 4.82312ZM12.5 5.32312C11.6716 5.32312 11 5.99469 11 6.82312C11 7.65155 11.6716 8.32312 12.5 8.32312C13.3284 8.32312 14 7.65155 14 6.82312C14 5.99469 13.3284 5.32312 12.5 5.32312ZM19 6.32312C18.4477 6.32312 18 6.77084 18 7.32312C18 7.8754 18.4477 8.32312 19 8.32312C19.5523 8.32312 20 7.8754 20 7.32312C20 6.77084 19.5523 6.32312 19 6.32312ZM6 6.32312C5.44772 6.32312 5 6.77084 5 7.32312C5 7.8754 5.44772 8.32312 6 8.32312C6.55228 8.32312 7 7.8754 7 7.32312C7 6.77084 6.55228 6.32312 6 6.32312Z"
            fill="#212121"
          />
        </svg>
      ),
      key: "Teams",
    },
    {
      icon: (
        <svg
          style={{
            width: "24px",
            height: "24px",
          }}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.25 3.82312C20.0449 3.82312 21.5 5.27819 21.5 7.07312V18.5731C21.5 20.368 20.0449 21.8231 18.25 21.8231H6.75C4.95507 21.8231 3.5 20.368 3.5 18.5731V7.07312C3.5 5.27819 4.95507 3.82312 6.75 3.82312H18.25ZM20 9.32312H5V18.5731C5 19.5396 5.7835 20.3231 6.75 20.3231H18.25C19.2165 20.3231 20 19.5396 20 18.5731V9.32312ZM8.25 15.3231C8.94036 15.3231 9.5 15.8828 9.5 16.5731C9.5 17.2635 8.94036 17.8231 8.25 17.8231C7.55964 17.8231 7 17.2635 7 16.5731C7 15.8828 7.55964 15.3231 8.25 15.3231ZM12.5 15.3231C13.1904 15.3231 13.75 15.8828 13.75 16.5731C13.75 17.2635 13.1904 17.8231 12.5 17.8231C11.8096 17.8231 11.25 17.2635 11.25 16.5731C11.25 15.8828 11.8096 15.3231 12.5 15.3231ZM8.25 11.3231C8.94036 11.3231 9.5 11.8828 9.5 12.5731C9.5 13.2635 8.94036 13.8231 8.25 13.8231C7.55964 13.8231 7 13.2635 7 12.5731C7 11.8828 7.55964 11.3231 8.25 11.3231ZM12.5 11.3231C13.1904 11.3231 13.75 11.8828 13.75 12.5731C13.75 13.2635 13.1904 13.8231 12.5 13.8231C11.8096 13.8231 11.25 13.2635 11.25 12.5731C11.25 11.8828 11.8096 11.3231 12.5 11.3231ZM16.75 11.3231C17.4404 11.3231 18 11.8828 18 12.5731C18 13.2635 17.4404 13.8231 16.75 13.8231C16.0596 13.8231 15.5 13.2635 15.5 12.5731C15.5 11.8828 16.0596 11.3231 16.75 11.3231ZM18.25 5.32312H6.75C5.7835 5.32312 5 6.10662 5 7.07312V7.82312H20V7.07312C20 6.10662 19.2165 5.32312 18.25 5.32312Z"
            fill="#212121"
          />
        </svg>
      ),
      key: "Calendar",
    },
    {
      icon: (
        <svg
          style={{
            width: "24px",
            height: "24px",
          }}
          width="25"
          height="25"
          viewBox="2 2 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 12.8231C8.25 13.7896 7.4665 14.5731 6.5 14.5731C5.5335 14.5731 4.75 13.7896 4.75 12.8231C4.75 11.8566 5.5335 11.0731 6.5 11.0731C7.4665 11.0731 8.25 11.8566 8.25 12.8231ZM14.25 12.8231C14.25 13.7896 13.4665 14.5731 12.5 14.5731C11.5335 14.5731 10.75 13.7896 10.75 12.8231C10.75 11.8566 11.5335 11.0731 12.5 11.0731C13.4665 11.0731 14.25 11.8566 14.25 12.8231ZM18.5 14.5731C19.4665 14.5731 20.25 13.7896 20.25 12.8231C20.25 11.8566 19.4665 11.0731 18.5 11.0731C17.5335 11.0731 16.75 11.8566 16.75 12.8231C16.75 13.7896 17.5335 14.5731 18.5 14.5731Z"
            fill="#212121"
          />
        </svg>
      ),
      key: "More",
    },
  ];

  return (
    <div id="footer">
      {/* <Flex style={{ minHeight: "50px" }} > */}
      <ul>
        {items.map((data, index) => (
          // <Menu
          //   iconOnly
          //   key={index}
          //   style={{ width: "20%", justifyContent: "center" }}
          //   defaultActiveIndex={0}
          //   items={[data]}
          // />


            <li>
              <div className="box-item">
              {data.icon}
              <div className="footer-item-label">{data.key}</div>
              </div>
            </li>
         

        ))}
         </ul>
      {/* </Flex> */}
    </div>
  );
};

export default Footer;
