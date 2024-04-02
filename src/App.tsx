import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./App.css"
import TodoEntry from './Routes/TodoEntry';
import TodoMap from './Routes/TodoMap';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { EditOutlined,BookOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div id="sidebar">
          <h1>TODO作成・管理表</h1>
          <div id="search-form">
            <form role="search" id="search-form">
              <input
                type="search" 
                id="search-input"
                placeholder='検索ワードを入れる'
                />
            </form>
            <form method="post">
              <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
            </form>
          </div>
          <nav>
            <div style={{display:"flex",flexDirection:"column"}}>
              <Link to="/entry" style={{display:"flex",alignItems:"center",gap:"8px"}}><EditOutlined /><span>TODO Edit</span></Link>
              <Link to="/map" style={{display:"flex",alignItems:"center",gap:"8px"}}><BookOutlined /><span>TODO Mapping</span></Link>
            </div>
          </nav>
        </div>
        <div className="content-area">
          <Routes>
            <Route path="/entry" element={<TodoEntry />} />
            <Route path="/map" element={<TodoMap />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

