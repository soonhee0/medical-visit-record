// 画面上のユーザーリストと操作ボタンのUI要素　渡されたデータとテーブルを表示
"use client";
import { useRouter } from "next/navigation";
import React from "react";

type User = {
  id: number;
  name: string;
};
type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  const router = useRouter();
  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    router.push("/users");
    router.refresh();
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            {/* <thead>はテーブルヘッダーをグループ化する */}
            <thead>
              <tr>
                {/* <th>はテーブルのヘッダーセル 　<tr>はテーブル内の行*/}
                <th className="px-4 py-3 font-medium text-gray-900 text-sm bg-gray-100">
                  名前
                </th>
                <th className="px-4 py-3 font-medium text-gray-900 text-sm bg-gray-100 w-1/4"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    {user.name}
                  </td>
                  <td className="flex justify-end border-t-2 border-gray-200 px-4 py-3">
                    <button
                      className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(user.id)}
                    >
                      削除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4 lg:w-2/3 w-full mx-auto">
          <button className="flex items-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
            追加
          </button>
        </div>
      </div>
    </section>
  );
};
export default UserList;
