// MenuButtonコンポーネントを使ってボタンのスタイルと機能を設定する
"use client"; 
import React from 'react';
import MenuButton from './MenuButton';

interface Button{
   
     label:string; //ボタンに表示するラベル
    onClick:()=>void;//ボタンがクリックされたときの処理
}


interface UserMenuProps{
    userName:string;
    buttons:Button[];
}



const UserMenu:React.FC<UserMenuProps>=({userName,buttons})=>{
   
    return (
     

    //   divタグ内を下記と置き換える
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
       
                 <span className="text-xl font-semibold text-gray-800"> {userName}さんのメニュー</span>
            </div>
            <div className="space-y-2">
              {/* 各ボタンに異なるテキストとクリックイベントを渡す */}
            {/* buttonsは各ボタンの情報（ラベルやクリックイベント）を格納している配列 */}
                {buttons.map((button,index)=>(
                    // 各ボタンの情報を利用してメニューボタンを生成する
                    <MenuButton
                        key={index}
                        // ボタンクリック時の処理を指定
                        onClick={button.onClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    
                    >
                        {button.label}
                    </MenuButton> 
                ))} 
            </div> 
        </div>
    )
}
export default  UserMenu