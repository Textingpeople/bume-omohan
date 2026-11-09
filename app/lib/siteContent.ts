// Shared business identity and SMS program content.
// Keeping these in one place guarantees the legal name, address, phone,
// email, SMS program definitions, and sample messages are word-for-word
// identical everywhere they appear (Footer, Contact, Terms, Privacy,
// About, and the /sms page).

// NEEDS CONFIRMATION: LEGAL_NAME and PHONE are placeholders — the task
// settings left "[Omohan LLC — exact name registered in TCR]" and
// "[(XXX) XXX-XXXX — support number]" unfilled. Swap in the real legal
// entity name and support phone number before launch.
export const LEGAL_NAME = "Omohan LLC";
export const DISPLAY_NAME = "Omohan";
export const ADDRESS = "838 Walker Rd Ste 21-2, Dover, DE 19904-2751";
export const PHONE_DISPLAY = "(302) 555-0100"; // placeholder — confirm real number
export const PHONE_TEL = "+13025550100"; // placeholder — confirm real number
export const EMAIL = "support@omohan.com";
export const WEBSITE = "omohan.com";

export const PROGRAM_NAME = "Omohan Care Alerts";

export const ACCOUNT_NOTIFICATIONS_DEF =
  "Account Notifications (automated): enrollment and account confirmations; care-navigator assignment and introduction; reminders for scheduled navigator check-ins; account security alerts.";

export const CUSTOMER_CARE_DEF =
  "Customer Care (two-way, from a human navigator): text conversations with your assigned care navigator about your care plan, in response to your requests.";

export const NOT_INCLUDED_LINE =
  "Not included: marketing or promotional messages. Omohan does not send marketing texts.";

export const HEALTH_INFO_NOTE =
  "To protect your privacy, navigators will not send detailed medical or personal health information by text. Text messages may not be secure; for sensitive details, your navigator will call you or use your Omohan account.";

export const SAMPLE_MESSAGES = [
  "Omohan: Welcome. Your account is active and your care navigator will reach out within 1 business day. Reply HELP for help, STOP to opt out. Msg & data rates may apply.",
  "Omohan: Reminder — your check-in with your care navigator is tomorrow at 2:00 PM. Reply STOP to opt out.",
  "Omohan: Hi, this is Dana, your care navigator. I've added three daycare options to your care plan in your Omohan account. Reply here with any questions. Reply STOP to opt out.",
  "Omohan: New sign-in to your account. If this wasn't you, contact support@omohan.com. Reply STOP to opt out.",
];

export const ACCOUNT_NOTIFICATIONS_CONSENT = `By checking this box, I agree to receive automated Account Notification text messages from Omohan (${LEGAL_NAME}) at the phone number provided, including enrollment confirmations, navigator introductions, check-in reminders, and security alerts. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. No mobile information will be shared with or sold to third parties for marketing or promotional purposes.`;

export const CUSTOMER_CARE_CONSENT = `By checking this box, I agree to receive Customer Care text messages from my Omohan care navigator at the phone number provided, in response to my requests about my care plan. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. No mobile information will be shared with or sold to third parties for marketing or promotional purposes.`;

export const EMERGENCY_DISCLAIMER =
  "Omohan is not an emergency service. If you or someone else is in danger, call 911. For a mental health crisis, call or text 988 (Suicide & Crisis Lifeline).";

export const SCOPE_DISCLAIMER =
  "Omohan care navigators provide guidance and referrals only. Omohan does not provide medical, mental health, legal, or financial advice or services, and does not sell insurance or enroll individuals in Medicare, Medicaid, or other plans.";
