import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez renseigner votre nom, email et message.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    // Check if Resend or SMTP configured via environment
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'contact@davidkayikinkela.com';

    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'David Kayi Kinkela Portfolio <noreply@davidkayikinkela.com>',
          to: [recipientEmail],
          reply_to: email,
          subject: `[Contact Portfolio] ${subject || 'Nouveau message de ' + name}`,
          text: `Nouveau message reçu depuis le site officiel :\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject || 'Non spécifié'}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        console.error('Erreur API Resend:', await res.text());
        return NextResponse.json(
          { error: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou contacter directement par email." },
          { status: 502 }
        );
      }
    } else {
      // In development or when RESEND_API_KEY is not configured yet:
      console.log(`[Formulaire de Contact Reçu] Nom: ${name} | Email: ${email} | Sujet: ${subject || 'N/A'}`);
      console.log(`Message: ${message}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Votre message a été transmis avec succès. Le cabinet vous répondra dans les plus brefs délais.',
    });
  } catch (error) {
    console.error('Erreur traitement contact:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur lors du traitement de la requête.' },
      { status: 500 }
    );
  }
}
