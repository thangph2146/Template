import React, { memo } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { privatePage } from "../../routers/mainRouter";
import "./index.scss";
const SideBarComponent = () => {
  const navigate = useNavigate();

  return (
    <Menu mode="vertical" className="side-bar" >
      {privatePage
        .filter((item) => item.menu)
        .map((e) =>
          e.routes ? (
            <Menu.SubMenu key={e.name} title={e.headerName} icon={e.menu?.icon}> 
              {e.routes
                .filter((item) => item.menu)
                .map((el) => (
                  <Menu.Item
                    key={el.name}
                    icon={el.menu?.icon}
                    onClick={() => navigate(el.path)}
                  >
                    {el.headerName}
                  </Menu.Item>
                ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item
              key={e.name}
              icon={e.menu?.icon}
              onClick={() => navigate(e.path)}
            >
              {e.headerName}
            </Menu.Item>
          )
        )}
    </Menu>
  );
};

export default memo(SideBarComponent);
