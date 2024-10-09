// UserMenuPageからプロップスを受け取る
"use client"; 
import React from 'react';
type MenuButtonProps={
    // React.ReactNodeはアイコンやテキストを含む
    children:React.ReactNode; 
       // onClick はボタンがクリックされたときに実行される関数
    onClick:()=>void;
    className?: string; // オプションのクラス名プロップ
}
const MenuButton: React.FC<MenuButtonProps>=({children,onClick,className})=>{
    return (
    //    classNameが存在すればそれを使い、なければデフォルトの’btn'クラスを使う
        <button onClick={onClick} className={className||'btn'}>{children}</button>
    )
}
  
export default MenuButton;