import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEETS_PRIVATE_KEY = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n');

const getSheets = async () => {
  if (!GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY) {
    console.warn("Google Sheets API credentials are not set in environment variables.");
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: GOOGLE_SHEETS_PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

async function getSheetData(range: string) {
  if (!SPREADSHEET_ID) {
    console.warn("GOOGLE_SHEET_ID is not set in environment variables.");
    return [];
  }
  
  const sheets = await getSheets();
  if (!sheets) {
    return [];
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
    }, {
      // This is not standard for googleapis, but some fetch-based libraries might support it.
      // A more robust way is to wrap this in a fetch call with Next.js caching options.
      // Let's try a direct fetch to control caching.
    });

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${(sheets.auth as any).apiKey}`;
    
    const fetchResponse = await fetch(url, { next: { revalidate: 0 } });
    if (!fetchResponse.ok) {
      console.error('Error fetching sheet data via fetch:', await fetchResponse.text());
      return [];
    }

    const data = await fetchResponse.json();
    return data.values || [];
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    // Fallback to the original method if fetch fails for some reason
    try {
        const sheets = await getSheets();
        if(!sheets) return [];
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: range,
        });
        return response.data.values || [];
    } catch (fallbackError) {
        console.error('Error fetching sheet data on fallback:', fallbackError);
        return [];
    }
  }
}

function mapToObjects(data: any[][]) {
  if (!data || data.length < 2) return [];
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
  return mapToObjects(data);
}

export async function getTeamMembers() {
  const data = await getSheetData('Team!A1:F');
  return mapToObjects(data);
}

export async function getGalleryImages() {
  const data = await getSheetData('Gallery!A1:C');
  return mapToObjects(data);
}