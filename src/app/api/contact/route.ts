import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      service: service?.trim() || "General Inquiry",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    // If GOOGLE_SCRIPT_URL is configured, forward data to Google Sheets & Gmail Web App
    if (scriptUrl) {
      try {
        const scriptResponse = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          redirect: "follow",
        });

        if (!scriptResponse.ok) {
          const errText = await scriptResponse.text().catch(() => "");
          console.error("Google Apps Script response error:", errText);
          return NextResponse.json(
            { error: "Failed to send data to Google Sheets/Gmail." },
            { status: 502 }
          );
        }

        const data = await scriptResponse.json().catch(() => ({ status: "success" }));
        return NextResponse.json({ success: true, data });
      } catch (err: any) {
        console.error("Error communicating with Google Script:", err);
        return NextResponse.json(
          { error: "Failed to communicate with Google Apps Script: " + (err.message || "Unknown error") },
          { status: 502 }
        );
      }
    }

    // If not configured yet (e.g. initial setup), log locally in dev console and succeed gracefully
    console.warn(
      "⚠️ [Contact API] GOOGLE_SCRIPT_URL is not set in .env.local! Requirement logged to console:",
      payload
    );

    return NextResponse.json({
      success: true,
      notice: "Form received in demo mode. Configure GOOGLE_SCRIPT_URL in .env.local to send to Google Sheets & Gmail.",
    });
  } catch (error: any) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
