import { Drawer, Input, Menu, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { AiOutlineLeft } from "react-icons/ai";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "cat1",
    label: "Trending",
  },

  {
    key: "cat2",
    label: "Health",
  },

  {
    key: "cat3",
    label: "Technology",
  },
  {
    key: "cat4",
    label: "Science",
  },
  {
    key: "cat5",
    label: "Entertainment",
  },
  {
    key: "cat6",
    label: "Latest",
  },

  {
    key: "cat7",
    label: "More",
    children: [
      {
        key: "more1",
        label: "Engineering",
      },
    ],
  },
];
export const SideNav = ({ open, onClose }: SideNavProps) => {
  return (
    <Drawer
      width={300}
      placement="left"
      title={<Input size="large" placeholder="Search" />}
      onClose={onClose}
      open={open}
      closeIcon={<AiOutlineLeft />}
    >
      <div>
        <Menu
          style={{
            border: "none",
          }}
          className="text-3xl flex  flex-col gap-2"
          defaultSelectedKeys={[""]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </Drawer>
  );
};
