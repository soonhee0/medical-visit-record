// MenuButtonコンポーネントを使ってボタンのスタイルと機能を設定する
"use client"; 
import { useRouter } from 'next/router';
import React from 'react';
import MenuButton from './MenuButton';
// interface Button{
   
//      label:string; //ボタンに表示するラベル
//     onClick:()=>void;//ボタンがクリックされたときの処理
// }


interface UserMenuProps{
    userName:string;
    // buttons:Button[];
}



const UserMenu:React.FC<UserMenuProps>=({userName})=>{
   const router=useRouter();
   const handleClick1=()=>{
    router.push('/create')
   }
    return (
     

    //   divタグ内を下記と置き換える
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
       
                 <span className="text-xl font-semibold text-gray-800"> {userName}さんのメニュー</span>
            </div>
            <div className="space-y-2">
              {/* 各ボタンに異なるテキストとクリックイベントを渡す */}
           
                    // 各ボタンの情報を利用してメニューボタンを生成する
                    <MenuButton
                    
                        // ボタンクリック時の処理を指定
                        onClick={handleClick1}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    
                    >
                       新しい通院記録を書く
                    </MenuButton> 
             
            </div> 
        </div>
    )
}
export default  UserMenu