import * as React from "react";
// import Layout from 'layouts/Notification';
// import { Button } from '@fluentui/react-northstar';
import { Input, Avatar, Card, Flex, Text } from "@fluentui/react-northstar";
import { SearchIcon } from "@fluentui/react-icons-northstar";

interface NotificationProps { }

const map = [1, 2, 3, 4, 5, 6];

export const Notification: React.FunctionComponent<NotificationProps> = () => {
    return (
        <div className="content-container notifications-page">
            <div className="header-bottom">
                <div className="container-box">
                    <div className="header-search-bar">
                        <Input
                            fluid
                            icon={<SearchIcon />}
                            placeholder="Search..."
                            iconPosition="start"
                        />
                    </div>
                </div>
            </div>
            <div className="container-box">
                <div className="content-container">
                    {map.map((data, index) => (
                        <div key={index} className="notification-item">

                            <div className="notification-item-container">
                                <div className="notification-user-avatar">
                                    <Avatar
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                        }}
                                        image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
                                    />
                                </div>

                                <div className="notification-action">
                                    <div className="notification-action-container">
                                        <div className="notification-action-title">
                                            <span className="font-fmn">Truong Van Hung</span>
                                        </div>

                                        <div className="notification-action-comment">
                                            Van ban hp
                                        </div>

                                        <div className="notification-action-time">
                                            <div className="notification-action-date">
                                                26/08/2022
                                            </div>

                                            <div className="notification-action-time">
                                                {/* {noti.NgayTao ? (noti.NgayTao).slice(-8).trim() : ""} */}
                                                16:21:37
                                            </div>

                                            <div className="notification-action-day">thứ sáu</div>
                                        </div>
                                    </div>

                                    <div className="notification-status">
                                        <div className="circle-status"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};
