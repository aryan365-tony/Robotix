import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

const getSheets = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
}

async function getSheetData(range: string) {
  try {
    const sheets = getSheets();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
    });
    return response.data.values || [];
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return [];
  }
}

function mapToObjects(data: any[][]) {
  const headers = data[0];
  const rows = data.slice(1);
  return rows.map(row => {
    const obj: { [key: string]: any } = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || null;
    });
    return obj;
  });
}

export async function getProjects() {
  const data = await getSheetData('Projects!A1:D');
  if (data.length < 2) return [];
  return mapToObjects(data);
}

export async function getTeamMembers() {
  const data = await getSheetData('Team!A1:F');
   if (data.length < 2) return [];
  return mapToObjects(data);
}

export async function getGalleryImages() {
  const data = await getSheetData('Gallery!A1:C');
   if (data.length < 2) return [];
  return mapToObjects(data);
}
