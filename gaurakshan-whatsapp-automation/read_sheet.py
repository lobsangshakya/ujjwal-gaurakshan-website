from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.options import Options
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import gspread
from oauth2client.service_account import ServiceAccountCredentials

# ✅ Path to your Edge WebDriver
service = Service(executable_path="msedgedriver.exe")

# ✅ Configure Edge with your user profile to persist login
options = Options()
options.add_argument("user-data-dir=C:/Users/gyana/AppData/Local/Microsoft/Edge/User Data")
options.add_argument("profile-directory=Default")  # Change if you're using a different profile

# ✅ Start the browser
driver = webdriver.Edge(service=service, options=options)

# ✅ Open WhatsApp Web
driver.get("https://web.whatsapp.com")

print("📱 Please scan the QR code (only if you're not already logged in)...")

time.sleep(10)  # Let WhatsApp Web fully load

# ✅ Function to clean emojis/special characters outside BMP
def remove_non_bmp(text):
    return ''.join(c for c in text if ord(c) <= 0xFFFF)

# 🔍 Function to search and open the group by name
def open_group(group_name):
    try:
        search_box = WebDriverWait(driver, 60).until(
            EC.presence_of_element_located((By.XPATH, '//div[@contenteditable="true" and @data-tab]'))
        )
        search_box.clear()
        search_box.send_keys(group_name)
        time.sleep(2)

        group_title = WebDriverWait(driver, 60).until(
            EC.element_to_be_clickable((By.XPATH, f'//span[@title="{group_name}"]'))
        )
        driver.execute_script("arguments[0].scrollIntoView(true);", group_title)
        time.sleep(0.5)
        group_title.click()
        time.sleep(2)
        return True
    except Exception as e:
        print(f"❌ Could not open group '{group_name}':", e)
        return False

# 🧾 Google Sheets setup
scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]
creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
client = gspread.authorize(creds)

SPREADSHEET = "Gaurakshan"
sheet = client.open(SPREADSHEET).sheet1

# 📋 Read sheet data
rows = sheet.get_all_records()
headers = sheet.row_values(1)

# 📝 Add 'Status' column if not present
if "Status" not in headers:
    sheet.update_cell(1, len(headers) + 1, "Status")
    headers.append("Status")

# 🐄 WhatsApp Group Name
group_name = "प्रेम की बांसुरी"

# 📨 Send messages
for i, row in enumerate(rows, start=2):
    if row.get("Status", "").lower() != "sent":
        # Format message
        message = f"""
🙏 *{row['Donor']} ji*, ₹{row['Amount']} ka *Gau Daan* _{row['Date']}_ ko *{row['In the Name of']}* ke naam se pradaan kiya gaya.
Aapka hardik abhaar hai! 🐄
""".strip()

        message = remove_non_bmp(message)

        print(f"\n📨 Sending message for row {i-1}...")
        time.sleep(3)
        if open_group(group_name):
            try:
                # Wait for message box (increased timeout to 60 sec)
                wait = WebDriverWait(driver, 60)
                message_box = wait.until(EC.presence_of_element_located((
                    By.XPATH,
                    '//footer//div[@role="textbox" and @contenteditable="true"]'
                )))

                message_box.send_keys(message)
                time.sleep(1)

                send_button = WebDriverWait(driver, 60).until(
                    EC.element_to_be_clickable((By.XPATH, '//span[@data-icon="send"]'))
                )
                send_button.click()
                print("✅ Message sent")

                # Mark as sent
                sheet.update_cell(i, headers.index("Status") + 1, "Sent")

                # Short delay before next
                time.sleep(4)
            except Exception as e:
                print("❌ Failed to send message:", e)
        else:
            print("❌ Skipped: Group not found")

# 🎉 Done
print("\n🎉 All messages processed.")
