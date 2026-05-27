import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Provider A",
      monthlyQuota: 100,
      assignedCount: 20,
    },
    {
      id: 2,
      name: "Provider B",
      monthlyQuota: 200,
      assignedCount: 50,
    },
  ])
}