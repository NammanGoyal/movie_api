import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Searchs = () => (
  <Space direction="vertical" className='w-full'>
    
    <Search
      placeholder="Input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      style={{ width: '84%' }}
    />
  </Space>
);
export default Searchs;