import { NextResponse } from "next/server";
import { dummyData } from "../dummyData/dummy";

export async function GET() {
  return NextResponse.json({ users: dummyData });
}
