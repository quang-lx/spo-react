import React from "react";
import {Image, List, Text} from "@fluentui/react-northstar";
import {TagIcon} from "@fluentui/react-icons-northstar";

class BigSubMenu extends React.Component {
  state = {
    selectedIndex: -1,
  }
  items = [
    {
      key: 'item-1',
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
        />
      ),
      header: <Text content={<span><TagIcon size="smaller"/> Nguyễn Mạnh Cường</span>}/>,
      headerMedia: '7:26',
      content: <Text
        content="210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới"/>
    },
    {
      key: 'item-2',
      className: "unseen",
      media: (
        <Image
          src="https://i.ibb.co/Vjq1gg7/148714090-3979558975396760-8986126341265647886-n.jpg"
          avatar
        />
      ),
      header: <Text content="Trần Đình Thủy" weight="semibold" className="text-black"/>,
      headerMedia: <Text content="11:30" weight="semibold" className="text-black"/>,
      content: <Text
        content="Phát sinh tăng hạng mục xây dựng, nội thất, m&e ( điều chỉnh boq cho phù hợp): 121.914.600đ - phát sinh tăng hạng mục quảng cáo ( do thay đổi thiết kế sau khi chốt boq) : 11.520.000đ"
        weight="semibold" color="brand"/>,
    },
    {
      key: 'item-3',
      className: "unseen",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text content="15:22" weight="semibold" className="text-black"/>,
      content: <Text
        content="[BPXDMN_29/04] Dự Án Lầu 3 Nguyễn Thái Học, 83 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận 1, TP HCM"
        weight="semibold" color="brand"/>,
    },
    {
      key: 'item-4',
      media: (
        <Image
          src="https://i.ibb.co/C7QpdVM/72742010-2473508566058165-7682836468292648960-n.jpg"
          avatar
        />
      ),
      header: <Text content="Ngô Hoàng Nam"/>,
      headerMedia: '7:26',
      content: <Text
        content="[ITHCM-02/11/2021] Xin duyệt chủ trương mua sắm các thiết bị vật tư cho dự án cửa hàng lẩu Aeon Mall Tân Phú"/>
    },
    {
      key: 'item-5',
      media: (
        <Image
          src="https://i.ibb.co/tZcDv99/236285939-3308320666067112-4201085366173673459-n.jpg"
          avatar
        />
      ),
      header: <Text content="Trần Hoàng Huy"/>,
      headerMedia: '7:26',
      content: <Text
        content="KTCN. Tạm ứng tiền mặt hàng tháng để mua mẫu nguyên liệu phục vụ nghiên cứu và cảm quan sản phẩm"/>
    },
    {
      key: 'item-6',
      className: "unseen",
      media: (
        <Image
          src="https://i.ibb.co/jL8msg3/271914657-2051122095047442-6201605861733351206-n.jpg"
          avatar
        />
      ),
      header: <Text content="Nguyễn Như Hiếu" weight="semibold" className="text-black"/>,
      headerMedia: <Text content="15:22" weight="semibold" className="text-black"/>,
      content: <Text
        content="210723/CV-BPTK - Đăng ký cấp mã xác nhận cho phương tiện vận chuyển chuyên gia, cbnv công ty"
        weight="semibold" color="brand"/>,
    },
    {
      key: 'item-7',
      media: (
        <Image
          src="https://yt3.ggpht.com/ytc/AKedOLTebUysiOUr2VCeE1wqYTQkrVM00kZZO2CgnL7t9g=s900-c-k-c0x00ffffff-no-rj"
          avatar
        />
      ),
      header: <Text content="Nguyễn Mạnh Cường"/>,
      headerMedia: '7:26',
      content: <Text
        content="210724/TTR - Đề xuất pr các hạng mục truyền thông khẩu trang kool mask - pr sản phẩm mới"/>
    }
  ]

  actionSelectItem = (e, newProps) => {
    this.setState({
      selectedIndex: newProps?.selectedIndex,
    })
  }

  render() {
    return (
      <List
        className="big-sub-menu"
        selectable
        selectedIndex={this.state.selectedIndex}
        onSelectedIndexChange={this.actionSelectItem}
        items={this.items}
      />
    );
  }
}

export default BigSubMenu;