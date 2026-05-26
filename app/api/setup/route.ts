import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST() {
  try {
    const providers = Array.from({ length: 8 }, (_, i) => ({
      name: `Provider ${i + 1}`,
      monthlyQuota: 10,
      assignedCount: 0
    }))

    await prisma.provider.createMany({ data: providers, skipDuplicates: true })
    return NextResponse.json({ message: "Providers seeded", count: 8 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to seed providers" }, { status: 500 })
  }
}