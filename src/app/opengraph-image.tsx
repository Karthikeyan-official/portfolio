import { ImageResponse } from "next/og";

export const alt = "Karthikeyan Aruldoss — AI engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16202b",
          color: "#e8edf3",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8fb4d4" }}>Karthikeyan Aruldoss · Chennai</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05 }}>AI engineer.</div>
          <div style={{ marginTop: 16, fontSize: 36, color: "#c5d5e6" }}>LLMs, RAG, and cybersecurity SaaS.</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
