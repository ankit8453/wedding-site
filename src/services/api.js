// Google Sheets API integration
// Replace with your actual Google Sheets Web App URL

const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEB_APP_URL';

export const submitRSVP = async (formData) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...formData,
      }),
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return { success: false, error: error.message };
  }
};

// Instructions for setting up Google Sheets:
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Add the following code:
/*
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.phone,
    data.guests,
    data.dietary,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
*/
// 4. Deploy as Web App
// 5. Copy the URL and replace GOOGLE_SHEETS_URL above

