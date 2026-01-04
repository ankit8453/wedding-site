// Google Sheets API integration
// ⚠️ IMPORTANT: Replace this URL with the one you copied from "Deploy > Web App"
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzYAjaB98xjMvJwna3PWF_ZCGu3tK0oP6L_IcxxhZisvSoYZhiQExbsKYfhROc4yOBW/execYOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

// Family Connect Registration
export const submitRegistration = async (formData) => {
  try {
    // We use URLSearchParams to send data as 'application/x-www-form-urlencoded'
    // This is much more reliable for Google Apps Script than JSON
    const params = new URLSearchParams();
    
    // These keys must match exactly what we wrote in the Apps Script (p.fullName, etc.)
    params.append('fullName', formData.fullName);
    params.append('phone', formData.phone);
    params.append('side', formData.side);
    params.append('relation', formData.relation);

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: params,
      // We do NOT set 'mode: no-cors' or JSON headers here
      // allowing the browser to follow the Google redirect naturally
    });

    const result = await response.json();
    return result; // Returns { result: 'success', row: [...] }

  } catch (error) {
    console.error('Error submitting registration:', error);
    return { result: 'error', error: error.message };
  }
};

// ==========================================
// INSTRUCTIONS FOR GOOGLE APPS SCRIPT SETUP
// ==========================================
// 1. Go to your Google Sheet -> Extensions -> Apps Script
// 2. Delete existing code and PASTE THIS EXACT CODE:
/*

const SHEET_NAME = "Guests"; // Ensure your tab is named "Guests"

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);

    const p = e.parameter; // Grab data from URL parameters

    const newRow = [
      new Date(),       // A: Timestamp
      p.fullName,       // B: Name
      p.phone,          // C: Phone
      p.side,           // D: Side
      p.relation        // E: Relation
    ];

    sheet.appendRow(newRow);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': newRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Run this once to accept permissions
function initialSetup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  console.log("Active Sheet: " + doc.getName());
}

*/
// 3. Save -> Run 'initialSetup' -> Accept Permissions
// 4. Deploy -> New Deployment -> Type: Web App
// 5. Execute as: "Me"
// 6. Who has access: "Anyone" (CRITICAL!)
// 7. Copy the URL and paste it at the top of this file.