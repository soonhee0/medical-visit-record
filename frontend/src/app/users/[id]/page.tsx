// UserMenuコンポーネントを使ってボタンの表示を管理

import React from "react";
import { FaHospital, FaListAlt, FaUserPlus } from "react-icons/fa";
import UserMenu from "../../../components/UserMenu";
import { useUsers } from "./../users.hooks";

type Props = {
  params: {
    id: string; // 動的なパラメータ
  };
};
type user= {

    id: number;
    name:string;
  
};

const UserMenuPage: React.FC<Props>= async({ params }) => {
  // {}はオブジェクトの分割代入を表す　オブジェクトから特定のプロパティ（関数）を取り出すことができる
  const {fetchUsers}=useUsers();

  const data=await fetchUsers();
  console.log("data:",data)
  // userIdはnumber
  const userId=parseInt(params.id);

  const user=data.find((user:{id:number})=>user.id===userId)
  const userName=user?user.name:"匿名ユーザー";

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
