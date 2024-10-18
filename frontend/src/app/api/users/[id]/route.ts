import { NextResponse, type NextRequest } from "next/server";
import { dummyData } from "../../dummyData/dummy";

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // mockでデータを削除
  dummyData.splice(
    dummyData.findIndex((user) => user.id === parseInt(id)),
    1
  );

  // ここでデータベースからユーザーを削除する処理を行います
  // この例ではダミーの処理を行います
  console.log(`Deleting user with id: ${id}`);

  // 実際のアプリケーションでは、ここでデータベース操作を行います

  return NextResponse.json(
    { message: `User ${id} deleted successfully` },
    { status: 200 }
  );
}
