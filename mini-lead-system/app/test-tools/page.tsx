"use client";

export default function TestTools() {
  const resetWebhook = async () => {
    await fetch("/api/webhook/reset-quota", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventKey: "RESET_QUOTA" }),
    });

    alert("Webhook triggered");
  };

  const generateLeads = async () => {
    await fetch("/api/test/generate", {
      method: "POST",
    });

    alert("10 leads generated");
  };

  const stressTest = async () => {
    const requests = Array.from({ length: 10 }).map(() =>
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Stress User",
          phone: Math.random().toString().slice(2, 12),
          city: "Test",
          description: "Stress test",
          serviceId: 1,
        }),
      })
    );

    await Promise.all(requests);

    alert("Stress test completed");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Test Tools</h1>

      <button onClick={resetWebhook}>Reset Quota (Webhook)</button>
      <br /><br />

      <button onClick={generateLeads}>Generate 10 Leads</button>
      <br /><br />

      <button onClick={stressTest}>Stress Test (Concurrency)</button>
    </div>
  );
}