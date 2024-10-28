import { NextResponse, type NextRequest } from "next/server";
import { dummyData } from "../../dummyData/dummy";

export async function DELETE(
  _: NextRequest,
  // { params }は分割代入。関数に渡されたオブジェクトからidというプロパティを取り出し型を指定している
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // mockでデータを削除
  dummyData.splice(
    // .findIndex():dummyData 配列内の各要素を調べ、指定されたテスト関数を満たす最初の要素のインデックスを返す
    dummyData.findIndex((user) => user.id === parseInt(id)),
    1
  );


  console.log(`Deleting user with id: ${id}`);

  // 実際のアプリケーションでは、ここでデータベース操作を行います

  return NextResponse.json(
    { message: `User ${id} deleted successfully` },
    { status: 200 }
  );
}

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
){
  const id = params.id;
  const user=dummyData.find((user) => user.id === parseInt(id));
  if(!user){
    return NextResponse.json(
      { message: `User with  ${id} doesn't exist` },
      { status: 404 }
    );
  }
  return NextResponse.json(
    { message: `User with  ID ${id} found successfully`,user },
    { status: 200 }
  );
}

