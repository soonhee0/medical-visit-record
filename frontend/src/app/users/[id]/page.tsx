// UserMenuコンポーネントを使ってボタンの表示を管理
"use client"; 
import { useParams } from 'next/navigation'; // 動的なIDを取得
import React from 'react';
import UserMenu from '../../../components/UserMenu';




const UserMenuPage:React.FC=()=>{
  const handleClick1 = () => {
    // 後でページ遷移の設定をする
    console.log('Menu button1 clicked');
  };
  const handleClick2 = () => {
    // 後でページ遷移の設定をする
    console.log('Menu button2 clicked');
  };
  const handleClick3 = () => {
    // 後でページ遷移の設定をする
    console.log('Menu button3 clicked');
  };
  // ボタンのリスト
  const buttons=[
    {label:'Menu Button 1',onClick:handleClick1},
    {label:'Menu Button 2',onClick:handleClick2},
    {label:'Menu Button 3',onClick:handleClick3},
  ]
  // ダミーデータの設定（IDに基づいてユーザー名を生成）
  const getUserNameById=(id:string|undefined)=>{
    const dummyUsers:{[key:string]:string}={
      '1': '太郎',
      '2': '花子',
      '3': '次郎',
    }
    return dummyUsers[id||'']||'匿名ユーザー'
  }
  //useParamsからidを取得する
    // useParams の戻り値はオブジェクトなので直接idを取得する
  const params =useParams<{id:string}>()
  const userId=params.id
  // userIdを元にユーザー名を取得する
  const userName=getUserNameById(userId)

    return (
     
        <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 min-h-screen">
    
  
          <UserMenu userName={userName} />
        </div>
  
    )
}

export default UserMenuPage