// UserListページのエントリーポイント　ページ全体を構成する
import React from "react";
import UserList from "../../components/UserList";
import { useUsers } from "./users.hooks";

const UserListPage: React.FC = async () => {
  const { fetchUsers } = useUsers();
  const data = await fetchUsers();

  return (
    // メインコンテナ
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">利用者リスト</h1>
        <UserList users={data} />
      </div>
    </>
  );
};
export default UserListPage;
