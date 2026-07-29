import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "guesty1318@gmail.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return NextResponse.json(
      { error: "El servicio de email no está configurado." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const { name, email, hotelName, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof hotelName !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !hotelName.trim()
  ) {
    return NextResponse.json(
      { error: "Nombre, email y nombre del hotel son obligatorios." },
      { status: 400 }
    );
  }

  const safeMessage =
    typeof message === "string" && message.trim() ? message.trim() : null;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Güesty <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nueva solicitud de demo — ${hotelName}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Hotel/Hostal: ${hotelName}`,
        `Mensaje: ${safeMessage ?? "(sin mensaje)"}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Error enviando email con Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error inesperado enviando email:", error);
    return NextResponse.json(
      { error: "Error inesperado al enviar el email." },
      { status: 500 }
    );
  }
}
