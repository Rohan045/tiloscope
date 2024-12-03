import { motion } from "framer-motion";
import { Bell, FolderOpen, LayoutGrid, Plus, Save, User } from "lucide-react";
import React from "react";
import logo from "../assests/main-title-image.png";
import MenuButton from "./menuButton";

const Header = () => {
  return (
    <div className="flex flex-row justify-between p-3">
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "spring" }}
        className="centered"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        />
      </motion.div>
      <div className="mt-[20px]">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring" }}
          className="hidden md:flex md:flex-row"
        >
          <MenuButton
            config={{
              icon: <Plus strokeWidth={2} />,
              text: "New Board",
              onClickFn: () => {
                alert("Save");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <FolderOpen strokeWidth={2} />,
              text: "Open Boards",
              onClickFn: () => {
                alert("Save");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <Save strokeWidth={2} />,
              text: "Save Board",
              onClickFn: () => {
                alert("Save");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <Bell strokeWidth={2} />,
              text: "Notifications",
              onClickFn: () => {
                alert("Notifications");
              },
            }}
          />
          <MenuButton
            config={{
              icon: <LayoutGrid strokeWidth={2} />,
              text: "All Boards",
              onClickFn: () => {},
            }}
          />
          <MenuButton
            config={{
              icon: <User strokeWidth={2} />,
              text: "",
              onClickFn: () => {},
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
