// MenuButtonコンポーネントを使ってボタンのスタイルと機能を設定する

"use client";
import React, { ReactElement } from "react";
import MenuButton from "./MenuButton";
// react-iconsのFaUserアイコンをインポート
import { FaUserCircle } from "react-icons/fa";

interface Button {
  label: string; //ボタンに表示するラベル
  onClick: () => void; //ボタンがクリックされたときの処理
  icon: ReactElement;
}

interface UserMenuProps {
  userName: string;
  buttons: Button[];
}

const UserMenu: React.FC<UserMenuProps> = ({ userName, buttons }) => {
  return (
    <div className="bg-white-100 p-4 rounded-lg shadow-lg">
      {/* ヘッダー部分 */}
      <div className="bg-blue-100 w-full h-12 flex items-center px-4 rounded-t-lg mb-4">
        {/* アイコンを追加 */}
        <FaUserCircle className="text-gray-800 mr-2 align-middle " />

        <span className="text-xl font-semibold text-gray-800">
          {userName}さんのメニュー
        </span>
      </div>
      {/* ボディ部分 */}
      <div className="flex flex-col space-y-2">
        {/* 各ボタンに異なるテキストとクリックイベントを渡す */}
        {/* buttonsは各ボタンの情報（ラベルやクリックイベント）を格納している配列 */}
        {buttons.map((button, index) => (
          // 各ボタンの情報を利用してメニューボタンを生成する
          <MenuButton
            key={index}
            // ボタンクリック時の処理を指定
            onClick={button.onClick}
            className="bg-white text-gray-800 flex items-center space-x-2 px-4 py-2 rounded-lg border hover:bg-blue-600"
          >
            <span className="mr-2">{button.icon}</span>
            {button.label}
          </MenuButton>
        ))}
      </div>
    </div>
  );
};
export default UserMenu;
