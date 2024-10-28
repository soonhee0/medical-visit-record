// UserMenuコンポーネントを使ってボタンの表示を管理

import React from "react";
import { FaHospital, FaListAlt, FaUserPlus } from "react-icons/fa";
import UserMenu from "../../../components/UserMenu";
import { ApiUrl } from "./../../constants/url";
type Props = {
  params: {
    id: string; // 動的なパラメータ
  };
};


const UserMenuPage: React.FC<Props>= async({ params }) => {
 

  const userId=parseInt(params.id);
  // fetchやresponse.jsonにはawaitをつける
  // fetchを使って指定されたエンドポイントにGETリクエストを送信しユーザー情報を取得
  const response=await fetch(`${ApiUrl.BASE_API_URL}/api/users/${userId}`);
  // JSONデータとして解析してその結果をdataとして格納する
  const data=await response.json()

 
  const userName=data.user?data.user.name:"匿名ユーザー";

  // ボタンのリスト
  const buttons = [
    {
      label: "新しい通院記録の作成",
      href: "/create-record",
      icon: <FaUserPlus />,
    },
    { label: "過去の通院記録一覧", href: "/past-records", icon: <FaListAlt /> },
    {
      label: "医療機関別通院記録一覧",
      href: "/hospital-records",
      icon: <FaHospital />,
    },
  ];
  
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 min-h-screen">
      {/* UserMenu に userName と buttons を渡す */}
      <UserMenu userName={userName} buttons={buttons} />
    </div>
  );
};

export default UserMenuPage;
