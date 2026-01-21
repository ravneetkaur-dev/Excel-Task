Task: Excel Import with Validation (Node.js)
Objective:
Read an Excel file, validate records, show incorrect entries to the user, and save only correct records into the database.
Task Requirements:
1. Read Excel File
Implement Excel upload API.
Read Excel file using:
xlsx or exceljs npm package.
Columns:
First Name
Last Name
Email
Phone
Gender
2. Add Validations (Before Insert)
Validate each row before saving:
First Name → Required
Last Name → Required
Email → Must be valid format
Phone → Must be 10 digits
Gender → Male / Female / Other only
3. Handle Records
Valid records
Save to database (MongoDB / MySQL / PostgreSQL)
Invalid records
Do not save
Store in an error array with reason
4. Show Result to User (API Response)
Return JSON response:
 
JSON
{
  "totalRecords": 100,
  "successCount": 72,
  "errorCount": 28,
  "errors": [
    {
      "row": 5,
      "data": {
        "email": "user12example.com",
        "phone": "12345"
      },
      "reason": "Invalid email and phone"
    }
  ]
} 
 
5. UI Requirement (Optional but Recommended)
Show summary:
Total records
Success records
Error records
Show incorrect rows in table for user review
Expected Outcome:
Only clean data inserted into DB
User sees exact rows with issues
Clear success & error counts
