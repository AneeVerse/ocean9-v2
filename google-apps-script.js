/**
 * ==============================================================================
 * OCEAN 9 - GOOGLE APPS SCRIPT FOR GOOGLE SHEETS & GMAIL NOTIFICATIONS
 * ==============================================================================
 * 
 * This script runs inside Google Sheets (Extensions -> Apps Script).
 * It automatically:
 *   1. Receives form submissions from the Ocean 9 website.
 *   2. Appends each submission as a new row into your Google Sheet.
 *   3. Sends a styled notification email directly to your Gmail.
 *   4. Allows you to click "Reply" in Gmail to email the client back directly!
 * 
 * ------------------------------------------------------------------------------
 * SETUP INSTRUCTIONS:
 * ------------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new) and create a new blank spreadsheet.
 * 2. Rename the spreadsheet to "Ocean 9 - Website Inquiries".
 * 3. In the menu, click: Extensions -> Apps Script.
 * 4. Replace everything in the Apps Script editor with this code.
 * 5. (Optional) Set NOTIFICATION_EMAIL below if you want emails sent to a specific address,
 *    or leave it empty to send to your active Google account's Gmail.
 * 6. Click the blue "Deploy" button at the top right -> Choose "New deployment".
 * 7. Click the gear icon next to "Select type" and choose "Web app".
 * 8. Configure the deployment settings:
 *      - Description: "Ocean 9 Contact Form Webhook"
 *      - Execute as: "Me (your email)"
 *      - Who has access: "Anyone"   <--- IMPORTANT! Must be "Anyone"
 * 9. Click "Deploy" and authorize permissions when prompted.
 * 10. Copy the "Web app URL" (starts with https://script.google.com/macros/s/...)
 * 11. Paste that URL into your project's `.env.local` file:
 *       GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 * 
 * ==============================================================================
 */

// Notification recipient email address
const NOTIFICATION_EMAIL = "team.ocean9999@gmail.com";

/**
 * Handles POST requests sent from Next.js server route (/api/contact)
 */
function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    return processSubmission(data);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (for testing in browser or if redirected)
 */
function doGet(e) {
  if (e && e.parameter && (e.parameter.name || e.parameter.email)) {
    return processSubmission(e.parameter);
  }
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ready", message: "Ocean 9 Contact API Webhook is active and running!" })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Core processing: writes to Google Sheet and sends Gmail notification
 */
function processSubmission(data) {
  var name = data.name || "N/A";
  var email = data.email || "N/A";
  var service = data.service || "General Inquiry";
  var message = data.message || "N/A";
  var timestamp = new Date();

  // 1. Append row to the active Google Sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  // Create header row if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Client Name", "Email Address", "Service", "Message"]);
    var headerRange = sheet.getRange(1, 1, 1, 5);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#002365");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 170); // Timestamp
    sheet.setColumnWidth(2, 180); // Name
    sheet.setColumnWidth(3, 220); // Email
    sheet.setColumnWidth(4, 200); // Service
    sheet.setColumnWidth(5, 400); // Message
  }

  sheet.appendRow([timestamp, name, email, service, message]);

  // 2. Send email notification to Gmail
  var recipientEmail = NOTIFICATION_EMAIL || Session.getActiveUser().getEmail();
  var subject = "⚓ Ocean 9 New Requirement: " + service + " (" + name + ")";

  var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd MMM yyyy, hh:mm a");

  var htmlBody =
    '<div style="font-family: \'Segoe UI\', Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">' +
    '<div style="background-color: #001e52; padding: 24px; text-align: center; color: #ffffff;">' +
    '<h2 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">OCEAN 9 SUBSEA</h2>' +
    '<p style="margin: 6px 0 0; font-size: 13px; color: #00d2ff; text-transform: uppercase; letter-spacing: 1px;">New Requirement Submission</p>' +
    '</div>' +
    '<div style="padding: 24px; color: #1e293b;">' +
    '<p style="margin-top: 0; font-size: 15px; color: #334155;">You have received a new requirement from the website contact form:</p>' +
    '<table style="width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 24px; font-size: 14px;">' +
    '<tr>' +
    '<td style="padding: 12px 14px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 130px; color: #475569;">Client Name</td>' +
    '<td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">' + name + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 12px 14px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Email Address</td>' +
    '<td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:' + email + '" style="color: #0284c7; text-decoration: none; font-weight: 600;">' + email + '</a></td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 12px 14px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Service</td>' +
    '<td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; color: #0369a1; font-weight: 700;">' + service + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 12px 14px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; vertical-align: top; color: #475569;">Requirement</td>' +
    '<td style="padding: 12px 14px; border-bottom: 1px solid #e2e8f0; line-height: 1.6; white-space: pre-wrap; color: #1e293b;">' + message + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 12px 14px; background-color: #f8fafc; font-weight: 600; color: #475569;">Date & Time</td>' +
    '<td style="padding: 12px 14px; color: #64748b; font-size: 13px;">' + formattedDate + '</td>' +
    '</tr>' +
    '</table>' +
    '<div style="text-align: center; margin-top: 24px;">' +
    '<a href="mailto:' + email + '?subject=' + encodeURIComponent('Re: Ocean 9 - Requirement regarding ' + service) + '" style="background-color: #002365; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-block;">Reply to Client Directly</a>' +
    '</div>' +
    '</div>' +
    '<div style="background-color: #f1f5f9; padding: 14px 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">' +
    'This inquiry was also recorded in your Google Sheet automatically.' +
    '</div>' +
    '</div>';

  if (recipientEmail) {
    MailApp.sendEmail({
      to: recipientEmail,
      replyTo: (email !== "N/A" && email.indexOf("@") !== -1) ? email : undefined,
      subject: subject,
      htmlBody: htmlBody
    });
  }

  return ContentService.createTextOutput(
    JSON.stringify({ status: "success", message: "Successfully recorded to sheet and sent email" })
  ).setMimeType(ContentService.MimeType.JSON);
}
