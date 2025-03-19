import { ConfigProvider } from 'antd';
import GlobalTheme from './theme/index.ts';
import './App.css';

function App() {
  return <ConfigProvider theme={GlobalTheme}>Hello world</ConfigProvider>;
}

export default App;
