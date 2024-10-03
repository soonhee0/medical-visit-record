// ビジネスロジック（ユーザーの追加や削除、状態管理など）
import { useEffect, useState } from 'react';
import UserList from './UserList';

const ParentComponent=()=>{
    const [users,setUsers]=useState<{id:number;name:string}[]>([]);
//   コンポーネントの初回レンダリング時に一度だけデータを取得する　 ダミーデータの設定
    useEffect(() => {
        const fetchtData=async()=>{
            const dummyData=[
                { id: 1, name: '山田 太郎' },
                { id: 2, name: '山田 花子' },
                { id: 3, name: '山田 一郎' },
            ];
            setUsers(dummyData);
        };
        fetchtData();
        
    },[]);
     const handleDelete=(id:number)=>{
        // user.id !== idという条件でフィルタリング　idとuser.idが一致しないオブジェクトだけ残る
        setUsers(users.filter(user=>user.id!==id))
    };
        
   
    
    return (
        <div>
           {/* データをUserListコンポーネントに渡す */}
            <UserList users={users} onDelete={handleDelete}/>
        </div>
        )

}
export default ParentComponent