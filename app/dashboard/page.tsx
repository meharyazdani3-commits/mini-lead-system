"use client"

import { useEffect, useState } from "react"

type Provider = {
  id: string | number
  name: string
  monthlyQuota: number
  assignedCount: number
}

export default function DashboardPage() {
  const [providers, setProviders] = useState<Provider[]>([])

  useEffect(() => {
    fetch("/api/providers")
      .then((res) => res.json())
      .then((data) => setProviders(data))
  }, [])

  const totalQuota = providers.reduce(
    (sum, p) => sum + p.monthlyQuota,
    0
  )

  const totalUsed = providers.reduce(
    (sum, p) => sum + p.assignedCount,
    0
  )

  const totalRemaining = totalQuota - totalUsed

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded p-4">
          <h2 className="font-semibold">Total Quota</h2>
          <p>{totalQuota}</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-semibold">Total Used</h2>
          <p>{totalUsed}</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-semibold">Remaining</h2>
          <p>{totalRemaining}</p>
        </div>
      </div>
    </div>
  )
}