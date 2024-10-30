import { NextResponse, type NextRequest } from "next/server";
// フォームで入力した値を受け取る
export async function POST(request: NextRequest) {
  const body = await request.json();
  const returnBody = {
    visitDate: body.visitDate || "", // 受け取った日付または空文字
    medicalInstitution: body.medicalInstitution || "", // 医療機関名
    visitReason: body.visitReason || "理由未設定", // 理由が未設定の場合のデフォルト値
    examinationContent: body.examinationContent || "", // 診察内容
    prescriptionPhoto: null, // 処方箋の写真はデフォルトで null
    prescriptionText: body.prescriptionText || "", // 処方内容
    nextVisitDate: body.nextVisitDate || "", // 次回の通院日
  }; // オブジェクトをjson形式に変換してクライアントに返す
  return NextResponse.json(returnBody, { status: 200 });
}
