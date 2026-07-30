import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

const TO_EMAIL = "guesty1318@gmail.com";
const FROM_EMAIL = "Güesty <onboarding@resend.dev>";

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
      from: FROM_EMAIL,
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
  } catch (error) {
    console.error("Error inesperado enviando email:", error);
    return NextResponse.json(
      { error: "Error inesperado al enviar el email." },
      { status: 500 }
    );
  }

  // A partir de aquí, la solicitud ya quedó notificada por email.
  // El guardado en Supabase y el email de confirmación al cliente son
  // "best effort": si fallan, no deben impedir que el usuario vea éxito.

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error: dbError } = await supabase.from("demo_requests").insert({
      name,
      email,
      hotel_name: hotelName,
      message: safeMessage,
    });

    if (dbError) {
      console.error("Error guardando la solicitud en Supabase:", dbError);
    }
  } else {
    console.warn(
      "Supabase no está configurado (SUPABASE_URL / SUPABASE_SECRET_KEY); no se guardó la solicitud."
    );
  }

  try {
    const { error: confirmError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Hemos recibido tu solicitud — Güesty",
      text: [
        `¡Hola ${name}!`,
        "",
        `Gracias por tu interés en Güesty para ${hotelName}. Hemos recibido tu solicitud y nuestro equipo se pondrá en contacto contigo muy pronto.`,
        "",
        "Un saludo,",
        "El equipo de Güesty",
      ].join("\n"),
    });

    if (confirmError) {
      console.error(
        "Error enviando email de confirmación al cliente:",
        confirmError
      );
    }
  } catch (error) {
    console.error("Error inesperado enviando confirmación al cliente:", error);
  }

  return NextResponse.json({ ok: true });
}
