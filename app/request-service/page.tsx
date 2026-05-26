"use client"

import { useEffect, useState } from "react"

type Provider = {
  id: string | number
  name: string
  monthlyQuota: number
  assignedCount: number
}

export default function RequestServicePage() {
  const [providers, setProviders] = useState<Provider[]>([])

  useEffect(() => {
    fetch("/api/providers")
      .then(res => res.json())
      .then(setProviders)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Request Service</h1>
      
      {providers.map((p) => (
        <div key={p.id} className="border p-4 mb-2 rounded">
          <h3 className="font-semibold">{p.name}</h3>
          <p>Quota: {p.monthlyQuota}</p>
          <p>Used: {p.assignedCount}</p>
          <p>Remaining: {p.monthlyQuota - p.assignedCount}</p>
        </div>
      ))}
    </div>
  )
}