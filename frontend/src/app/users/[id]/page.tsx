// UserMenuコンポーネントを使ってボタンの表示を管理
"use client";
import { useParams } from "next/navigation"; // 動的なIDを取得
import React from "react";
import { FaHospital, FaListAlt, FaUserPlus } from "react-icons/fa";
import UserMenu from "../../../components/UserMenu";
const UserMenuPage: React.FC = () => {
  const handleClick1 = () => {
    // 後でページ遷移の設定をする
    console.log("Menu button1 clicked");
  };
  const handleClick2 = () => {
    // 後でページ遷移の設定をする
    console.log("Menu button2 clicked");
  };
  const handleClick3 = () => {
    // 後でページ遷移の設定をする
    console.log("Menu button3 clicked");
  };
  // ボタンのリスト
  const buttons = [
    {
      label: "新しい通院記録の作成",
      onClick: handleClick1,
      icon: <FaUserPlus />,
    },
    { label: "過去の通院記録一覧", onClick: handleClick2, icon: <FaListAlt /> },
    {
      label: "医療機関別通院記録一覧",
      onClick: handleClick3,
      icon: <FaHospital />,
    },
  ];
  // ダミーデータの設定（IDに基づいてユーザー名を生成）
  const getUserNameById = (id: string | undefined) => {
    const dummyUsers: { [key: string]: string } = {
      "1": "太郎",
      "2": "花子",
      "3": "次郎",
    };
    return dummyUsers[id || ""] || "匿名ユーザー";
  };
  //useParamsからidを取得する
  // useParams の戻り値はオブジェクトなので直接idを取得する
  const params = useParams<{ id: string }>();
  const userId = params.id;
  // userIdを元にユーザー名を取得する
  const userName = getUserNameById(userId);

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 min-h-screen">
      {/* UserMenu に userName と buttons を渡す */}
      <UserMenu userName={userName} buttons={buttons} />
    </div>
  );
};

export default UserMenuPage;
