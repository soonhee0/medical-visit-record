// UserMenuPageからプロップスを受け取る
"use client";
import Link from "next/link";
import React from "react";

type MenuButtonProps = {
  // React.ReactNodeはアイコンやテキストを含む
  children: React.ReactNode;

  href: string;
  className?: string; // オプションのクラス名プロップ
};
const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  href,
  className,
}) => {
  return (
    // legacyBehaviorを使うことでaタグが使用できる
    <Link href={href} legacyBehavior>
      {/* //    classNameが存在すればそれを使う */}
      <a className={className}>{children}</a>
    </Link>
  );
};

export default MenuButton;
