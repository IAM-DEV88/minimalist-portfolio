import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { record } = await req.json()
    const { email, full_name } = record

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AgendaYa <onboarding@resend.dev>', // Cambia esto por tu dominio verificado en Resend
        to: [email],
        subject: '¡Bienvenido a AgendaYa!',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h1 style="color: #7c3aed; margin-bottom: 24px;">¡Hola ${full_name || 'Emprendedor'}!</h1>
            <p style="font-size: 16px; color: #4a5568; line-height: 1.6;">
              Gracias por registrarte en <strong>AgendaYa</strong>. Estamos emocionados de ayudarte a optimizar tus reservas y hacer crecer tu negocio.
            </p>
            <p style="font-size: 16px; color: #4a5568; line-height: 1.6;">
              Ya puedes acceder a tu dashboard y empezar a explorar nuestras APIs SaaS.
            </p>
            <div style="margin-top: 32px; text-align: center;">
              <a href="https://minimalist-portfolio-three.vercel.app/dashboard" style="background-color: #7c3aed; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Ir a mi Dashboard</a>
            </div>
            <hr style="margin-top: 40px; border: 0; border-top: 1px solid #e2e8f0;" />
            <p style="font-size: 12px; color: #a0aec0; text-align: center;">
              © 2026 AgendaYa. Todos los derechos reservados.
            </p>
          </div>
        `,
      }),
    })

    const data = await res.json()

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: res.status,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
