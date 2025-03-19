import { ThemeConfig } from 'antd';

const GlobalTheme: ThemeConfig = {
  components: {
    Input: {
      activeBorderColor: 'rgb(113, 176, 208)',
      borderRadius: 8,
      colorError: 'rgb(255, 150, 145)',
      colorBorder: 'rgb(154, 158, 166)',
    },
    InputNumber: {
      hoverBorderColor: 'rgb(113, 176, 208)',
      activeBorderColor: 'rgb(113, 176, 208)',
      borderRadius: 8,
      colorBorder: 'rgb(154, 158, 166)',
    },
    Checkbox: {
      colorPrimary: 'rgb(142, 249, 179)',
      colorPrimaryHover: 'rgb(71, 245, 133)',
      borderRadiusSM: 4,
    },
    Switch: {
      colorTextQuaternary: '#E5E7EB', // default background when the switch is unchecked
      handleSize: 20, // Size of the switch handle
      trackMinWidth: 42, // Width of the switch track
      trackHeight: 24, // Height of the switch track
    },
    Radio: {
      radioSize: 24,
      dotSize: 8,
    },
    Table: {
      rowSelectedBg: '#F7F8FA', // row selected bg color
      rowHoverBg: '#F7F8FA', // row hover bg color
      rowSelectedHoverBg: '#F7F8FA', // row selected hover bg color
      headerColor: 'green',
      headerBg: '#fbfcfd',
      headerSortHoverBg: '#fbfcfd',
      headerSortActiveBg: '#fbfcfd',
      fixedHeaderSortActiveBg: '#fbfcfd', // fixed sorting header active bg color
      footerBg: '#FFFFFF', // fixed sorting header active bg color
    },
  },
};

export default GlobalTheme;
