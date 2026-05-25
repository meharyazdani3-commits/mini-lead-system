"use client"

import { useState } from "react"

export default function Page() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    serviceType: "Service 1",
    description: "",
  })

  async function handleSubmit(e: any) {

    e.preventDefault()

    const res = await fetch("/api/request-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    alert(JSON.stringify(data))
  }

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-5">
        Request Service
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >

        <input
          placeholder="Name"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          placeholder="City"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              city: e.target.value,
            })
          }
        />

        <select
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              serviceType: e.target.value,
            })
          }
        >
          <option>Service 1</option>
          <option>Service 2</option>
          <option>Service 3</option>
        </select>

        <textarea
          placeholder="Description"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <button
          className="bg-black text-white p-2"
        >
          Submit
        </button>

      </form>

    </div>
  )
}