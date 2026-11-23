import { SITE } from "@/lib/site";

const SITE_URL = "https://karthikeyan-official.github.io/portfolio";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function thankYouEmail(name: string) {
  const first = name.split(" ")[0] || name;
  const safeName = escapeHtml(first);
  const subject = "Thank you for your message";
  const text = [
    `Dear ${first},`,
    "",
    "Thank you for taking the time to write. I have received your message and will review it personally.",
    "",
    "I will follow up by email if there is a suitable opportunity to continue the conversation. If I am not the right person for the role, I will let you know, so you are not left waiting.",
    "",
    "With kind regards,",
    SITE.name,
    SITE.email,
    SITE.linkedin,
    SITE.github,
    SITE_URL,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#e8edf3;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8edf3;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;">
            <tr>
              <td style="padding:36px 36px 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.02em;color:#5c6b7c;">
                ${escapeHtml(SITE.name)}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 36px 0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:1.25;color:#16202b;">
                Dear ${safeName},
              </td>
            </tr>
            <tr>
              <td style="padding:16px 36px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:#526272;">
                Thank you for taking the time to write. I have received your message and will review it personally.
              </td>
            </tr>
            <tr>
              <td style="padding:28px 36px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#16202b;border-radius:12px;">
                  <tr>
                    <td style="padding:22px 24px 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8fb4d4;">
                      Follow-up
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 24px 22px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:#e8edf3;">
                      I will follow up by email if there is a suitable opportunity to continue the conversation. If I am not the right person for the role, I will let you know, so you are not left waiting.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 36px 36px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#16202b;">
                With kind regards,<br />
                ${escapeHtml(SITE.name)}
              </td>
            </tr>
          </table>
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
            <tr>
              <td style="padding:18px 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.8;color:#5c6b7c;">
                <a href="${SITE_URL}" style="color:#23486a;text-decoration:none;">Portfolio</a>
                &nbsp;·&nbsp;
                <a href="${SITE.linkedin}" style="color:#23486a;text-decoration:none;">LinkedIn</a>
                &nbsp;·&nbsp;
                <a href="${SITE.github}" style="color:#23486a;text-decoration:none;">GitHub</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, text, html };
}
