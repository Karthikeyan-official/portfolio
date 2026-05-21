"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            style={{
              minHeight: "100vh",
              background: "#0B0F19",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9CA3AF",
              fontFamily: "monospace",
              fontSize: 14,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#3B82F6", fontSize: 32, marginBottom: 12 }}>K</div>
              <p>Karthikeyan Aruldoss — Portfolio</p>
              <p style={{ marginTop: 8, color: "#4B5563", fontSize: 12 }}>
                {this.state.error?.message ?? "Something went wrong"}
              </p>
              <button
                type="button"
                onClick={() => this.setState({ hasError: false, error: undefined })}
                style={{
                  marginTop: 16,
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "1px solid rgba(59,130,246,0.4)",
                  background: "rgba(59,130,246,0.1)",
                  color: "#93C5FD",
                  cursor: "pointer",
                  fontSize: 12,
                }}
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
