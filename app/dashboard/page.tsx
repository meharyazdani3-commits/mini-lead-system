"use client"
import { useEffect, useState } from "react"

export default function ProvidersDashboard() {
  const [providers, setProviders] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/providers")
      .then(res => res.json())
      .then(setProviders)
  }, [])

  return (
    <div>
      {providers.map((p) => (
        <div key={p.id} className="border p-4 mb-2">
          <h3>{p.name}</h3>
          <p>Quota: {p.monthlyQuota}</p>
          <p>Used: {p.assignedCount}</p>
          <p>Remaining: {p.monthlyQuota - p.assignedCount}</p>
        </div>
      ))}
    </div>
  )
}