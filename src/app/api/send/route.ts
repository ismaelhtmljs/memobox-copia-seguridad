import { NextRequest, NextResponse } from "next/server";
import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:tucorreo@ejemplo.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: NextRequest) {
  const sub = await req.json();

  const payload = JSON.stringify({
    title: "📝 Memobox",
    body: "⏰ ¡Tienes una notificación programada!",
  });

  try {
    await webpush.sendNotification(sub, payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando la notificación:", error);
    return NextResponse.json({ error: "No se pudo enviar" }, { status: 500 });
  }
}
