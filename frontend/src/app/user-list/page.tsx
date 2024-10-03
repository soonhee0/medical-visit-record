// UserListページのエントリーポイント　ページ全体を構成する
"use client"; 
import React from 'react';
import ParentComponent from '../../components/ParentComponent';

const UserListPage: React.FC =()=>{
    return (
    
         <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold text-center mb-8">利用者リスト</h1>  
          <ParentComponent />
        </div> 
    )
}
export default UserListPage;