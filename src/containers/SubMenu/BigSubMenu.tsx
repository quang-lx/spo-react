import React from "react";
import {Image, List, Text, Button, Popup} from "@fluentui/react-northstar";
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

interface MoreButtonsProps {

}

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

class BigSubMenu extends React.Component {
  state = {
    selectedIndex: -1,
  }
  items = [
    {
      key: "item-1",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
        />
      ),
      header: <Text><Text color="brand" title="Gấp"><TagIcon size="smaller"/></Text> <Text title="Nguyễn Mạnh Cường">Nguyễn Mạnh Cường</Text></Text>,
      headerMedia: <Text className="text-nowrap">
                      <Text color="red" className="pr-2" title="Sắp đến hạn"><RedbangIcon size="smaller"/></Text>
                      <Text color="yellow" className="pr-2" title="Quan trọng"><StarIcon size="smaller"/></Text>7:26
                  </Text>,
      content: <Text>
                210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
                <Text color="brand">
                  <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phê duyệt tờ trình</span>
                </Text>
              </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-2",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
          avatar
        />
      ),
      header: <Text weight="semibold" className="text-black"><Text color="red"><TagIcon size="smaller"/></Text> Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
                    <Text color="yellow" className="pr-2"><StarIcon size="smaller"/></Text>11:30
                  </Text>,
      content: <Text color="brand" weight="semibold">
                Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
                <Text color="brand">
                  <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phản hồi thảo luận</span>
                </Text>
              </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      key: "item-3",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
                    <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>15:30
                  </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      key: "item-4",
      media: (
        <Image
          src="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"
          avatar
        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
                    <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>6:45 2/3
                  </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-5",
      media: (
        <Image
          src="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"
          avatar
        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>,
      className: "cursor-pointer"
    },
    {
      key: "item-6",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
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
      key: "item-7",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
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
      key: "item-8",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
        />
      ),
      header: <Text><Text color="brand"><TagIcon size="smaller"/></Text> Nguyễn Mạnh Cường</Text>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><RedbangIcon size="smaller"/></Text>
        <Text color="yellow" className="pr-2"><StarIcon size="smaller"/></Text>7:26
      </Text>,
      content: <Text>
        210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phê duyệt tờ trình</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-9",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
          avatar
        />
      ),
      header: <Text weight="semibold" className="text-black"><Text color="red"><TagIcon size="smaller"/></Text> Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="yellow" className="pr-2"><StarIcon size="smaller"/></Text>11:30
      </Text>,
      content: <Text color="brand" weight="semibold">
        Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phản hồi thảo luận</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      key: "item-10",
      className: "unseen",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>15:30
      </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      key: "item-11",
      media: (
        <Image
          src="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"
          avatar
        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>6:45 2/3
      </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-12",
      media: (
        <Image
          src="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"
          avatar
        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>
    },
    {
      key: "item-13",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
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
      key: "item-14",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
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
      key: "item-15",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
        />
      ),
      header: <Text><Text color="brand"><TagIcon size="smaller"/></Text> Nguyễn Mạnh Cường</Text>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><RedbangIcon size="smaller"/></Text>
        <Text color="yellow" className="pr-2"><StarIcon size="smaller"/></Text>7:26
      </Text>,
      content: <Text>
        210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phê duyệt tờ trình</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-16",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
          avatar
        />
      ),
      header: <Text weight="semibold" className="text-black"><Text color="red"><TagIcon size="smaller"/></Text> Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="yellow" className="pr-2"><StarIcon size="smaller"/></Text>11:30
      </Text>,
      content: <Text color="brand" weight="semibold">
        Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phản hồi thảo luận</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      key: "item-17",
      className: "unseen",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>15:30
      </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      key: "item-18",
      media: (
        <Image
          src="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"
          avatar
        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>6:45 2/3
      </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-19",
      media: (
        <Image
          src="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"
          avatar
        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>
    },
    {
      key: "item-20",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
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
      key: "item-21",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
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
      key: "item-22",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
        />
      ),
      header: <Text><Text color="brand"><TagIcon size="smaller"/></Text> Nguyễn Mạnh Cường</Text>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><RedbangIcon size="smaller"/></Text>
        <Text color="yellow" className="pr-2"><StarIcon size="smaller"/></Text>7:26
      </Text>,
      content: <Text>
        210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phê duyệt tờ trình</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-23",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
          avatar
        />
      ),
      header: <Text weight="semibold" className="text-black"><Text color="red"><TagIcon size="smaller"/></Text> Trần Đình Thủy</Text>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="yellow" className="pr-2"><StarIcon size="smaller"/></Text>11:30
      </Text>,
      content: <Text color="brand" weight="semibold">
        Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ
        <Text color="brand">
          <span className="d-block w-100 pt-1"><ChatIcon size="smaller" {...{outline: true}}/> Phản hồi thảo luận</span>
        </Text>
      </Text>,
      endMedia: <MoreButtons/>,
      truncateHeader: true
    },
    {
      key: "item-24",
      className: "unseen",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text className="text-black" weight="semibold">
        <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>15:30
      </Text>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>
    },
    {
      key: "item-25",
      media: (
        <Image
          src="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"
          avatar
        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: <Text>
        <Text color="red" className="pr-2"><UrgentIcon size="smaller"/></Text>6:45 2/3
      </Text>,
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>,
      endMedia: <MoreButtons/>,
      className: "cursor-pointer",
      truncateHeader: true
    },
    {
      key: "item-26",
      media: (
        <Image
          src="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"
          avatar
        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: "7:26 1/3",
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>
    },
    {
      key: "item-27",
      className: "unseen cursor-pointer",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
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
      key: "item-28",
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
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

  actionSelectItem = (e, newProps) => {
    this.setState({
      selectedIndex: newProps?.selectedIndex,
    })
  }

  render() {
    return (
      <CustomScrollbars disableHorizontalScrolling>
        <List
          className="big-sub-menu"
          selectedIndex={this.state.selectedIndex}
          onSelectedIndexChange={this.actionSelectItem}
          items={this.items}
          selectable
        />
      </CustomScrollbars>
    );
  }
}

export default BigSubMenu;