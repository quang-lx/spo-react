import React, {useState} from "react";
import {Avatar, List, Text, Button, Popup} from "@fluentui/react-northstar";
import {
  TagIcon,
  RedbangIcon,
  UrgentIcon,
  StarIcon,
  ChatIcon,
  MoreIcon,
  EditIcon,
  TrashCanIcon
} from "@fluentui/react-icons-northstar";
import CustomScrollbars from "../../components/CustomScrollbars";
import {IBigSubMenuItem, MoreButtonsProps} from "../../interfaces/SubMenuInterfaces";
import {useNavigate} from "react-router-dom";
import {createRequestDetailLink} from "../../routes/RenderRoutes";

const MoreButtons: React.FunctionComponent<MoreButtonsProps> = (props) => {
  return (
    <Popup
      trigger={<Button flat text icon={<MoreIcon/>} iconOnly/>}
      content={
        <div className="custom-popup__wrapper">
          <div className="custom-popup__item">
            <Button
              className="p-0 justify-content-start"
              flat
              text
              icon={<EditIcon size="small" outline/>}
              content={<Text content="Cập nhật" weight="regular" color="gray"/>}
              fluid
            />
          </div>
          <div className="custom-popup__item">
            <Button
              className="p-0 justify-content-start"
              flat
              text
              icon={<TrashCanIcon size="small" outline/>}
              content={<Text content="Xóa" weight="regular" color="gray"/>}
              fluid
            />
          </div>
        </div>
      }
      position="below"
    />
  )
}

const BigSubMenu: React.FunctionComponent = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const items: IBigSubMenuItem[] = [
    {
      id: 1,
      key: "item-1",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text><Text title="Nguyễn Mạnh Cường">Nguyễn Mạnh Cường</Text></Text>,
      headerMedia: <Text className="text-nowrap">
                      <Text color="red" className="pr-2" title="Sắp đến hạn"><RedbangIcon outline size="small"/></Text>
                      <Text color="brand" className="pr-2" title="Gấp"><TagIcon outline size="small"/></Text>
                      <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>7:26
                  </Text>,
      content: <Text>
                210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
                <Text color="brand">
                  <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phê duyệt tờ trình</span>
                </Text>
              </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 2,
      key: "item-2",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"

        />
      ),
      header: <Text weight="semibold" className="text-black">Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
                    <Text color="red" className="pr-2"><TagIcon outline size="small"/></Text>
                    <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>11:30
                  </Text>,
      content: <Text color="brand" weight="semibold">
                Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
                <Text color="brand">
                  <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phản hồi thảo luận</span>
                </Text>
              </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 3,
      key: "item-3",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
                    <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>15:30
                  </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      id: 4,
      key: "item-4",
      media: (
        <Avatar
          image="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"

        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
                    <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>6:45 2/3
                  </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 5,
      key: "item-5",
      media: (
        <Avatar
          image="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"

        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>,
      className: "cursor-pointer"
    },
    {
      id: 6,
      key: "item-6",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text content="15:22 30/12" weight="semibold" className="text-black"/>,
      content: <Text
        content="210723/CV-BPTK - Đăng ký cấp mã xác nhận cho phương tiện vận chuyển chuyên gia, cbnv công ty"
        weight="semibold" color="brand"/>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 7,
      key: "item-7",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text content="Nguyễn Mạnh Cường"/>,
      headerMedia: "7:26 30/12",
      content: <Text
        content="210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 8,
      key: "item-8",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text><Text title="Nguyễn Mạnh Cường">Nguyễn Mạnh Cường</Text></Text>,
      headerMedia: <Text className="text-nowrap">
        <Text color="red" className="pr-2" title="Sắp đến hạn"><RedbangIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Gấp"><TagIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>7:26
      </Text>,
      content: <Text>
        210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phê duyệt tờ trình</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 9,
      key: "item-9",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"

        />
      ),
      header: <Text weight="semibold" className="text-black">Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><TagIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>11:30
      </Text>,
      content: <Text color="brand" weight="semibold">
        Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phản hồi thảo luận</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 10,
      key: "item-10",
      className: "unseen",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>15:30
      </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      id: 11,
      key: "item-11",
      media: (
        <Avatar
          image="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"

        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>6:45 2/3
      </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 12,
      key: "item-12",
      media: (
        <Avatar
          image="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"

        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>
    },
    {
      id: 13,
      key: "item-13",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text content="15:22 30/12" weight="semibold" className="text-black"/>,
      content: <Text
        content="210723/CV-BPTK - Đăng ký cấp mã xác nhận cho phương tiện vận chuyển chuyên gia, cbnv công ty"
        weight="semibold" color="brand"/>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 14,
      key: "item-14",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text content="Nguyễn Mạnh Cường"/>,
      headerMedia: "7:26 30/12",
      content: <Text
        content="210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 15,
      key: "item-15",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text><Text title="Nguyễn Mạnh Cường">Nguyễn Mạnh Cường</Text></Text>,
      headerMedia: <Text className="text-nowrap">
        <Text color="red" className="pr-2" title="Sắp đến hạn"><RedbangIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Gấp"><TagIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>7:26
      </Text>,
      content: <Text>
        210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phê duyệt tờ trình</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 16,
      key: "item-16",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"

        />
      ),
      header: <Text weight="semibold" className="text-black">Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><TagIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>11:30
      </Text>,
      content: <Text color="brand" weight="semibold">
        Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phản hồi thảo luận</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 17,
      key: "item-17",
      className: "unseen",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>15:30
      </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      id: 18,
      key: "item-18",
      media: (
        <Avatar
          image="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"

        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>6:45 2/3
      </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 19,
      key: "item-19",
      media: (
        <Avatar
          image="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"

        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>
    },
    {
      id: 20,
      key: "item-20",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text content="15:22 30/12" weight="semibold" className="text-black"/>,
      content: <Text
        content="210723/CV-BPTK - Đăng ký cấp mã xác nhận cho phương tiện vận chuyển chuyên gia, cbnv công ty"
        weight="semibold" color="brand"/>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 21,
      key: "item-21",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text content="Nguyễn Mạnh Cường"/>,
      headerMedia: "7:26 30/12",
      content: <Text
        content="210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 22,
      key: "item-22",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text><Text title="Nguyễn Mạnh Cường">Nguyễn Mạnh Cường</Text></Text>,
      headerMedia: <Text className="text-nowrap">
        <Text color="red" className="pr-2" title="Sắp đến hạn"><RedbangIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Gấp"><TagIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>7:26
      </Text>,
      content: <Text>
        210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phê duyệt tờ trình</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 23,
      key: "item-23",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"

        />
      ),
      header: <Text weight="semibold" className="text-black">Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><TagIcon outline size="small"/></Text>
        <Text color="brand" className="pr-2" title="Quan trọng"><StarIcon outline size="small"/></Text>11:30
      </Text>,
      content: <Text color="brand" weight="semibold">
        Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="small" {...{outline: true}}/> Phản hồi thảo luận</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 24,
      key: "item-24",
      className: "unseen",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>15:30
      </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      id: 25,
      key: "item-25",
      media: (
        <Avatar
          image="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"

        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><UrgentIcon outline size="small"/></Text>6:45 2/3
      </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      id: 26,
      key: "item-26",
      media: (
        <Avatar
          image="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"

        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>
    },
    {
      id: 27,
      key: "item-27",
      className: "unseen cursor-pointer",
      media: (
        <Avatar
          image="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"

        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text content="15:22 30/12" weight="semibold" className="text-black"/>,
      content: <Text
        content="210723/CV-BPTK - Đăng ký cấp mã xác nhận cho phương tiện vận chuyển chuyên gia, cbnv công ty"
        weight="semibold" color="brand"/>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      id: 28,
      key: "item-28",
      media: (
        <Avatar
          image="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"

        />
      ),
      header: <Text content="Nguyễn Mạnh Cường"/>,
      headerMedia: "7:26 30/12",
      content: <Text
        content="210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    }
  ]
  const navigate = useNavigate();

  const actionSelectItem = (e, newProps) => {
    setSelectedIndex(newProps?.selectedIndex);
    if(newProps.items.length > newProps.selectedIndex) {
      navigate(createRequestDetailLink(newProps.items[newProps.selectedIndex].id))
    }
  }

  return (
    <CustomScrollbars disableHorizontalScrolling>
      <List
        className="big-sub-menu"
        selectedIndex={selectedIndex}
        onSelectedIndexChange={actionSelectItem}
        items={items}
        selectable
      />
    </CustomScrollbars>
  );
}

export default BigSubMenu;