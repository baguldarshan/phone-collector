# Phone Collector

A simple contact form that collects phone numbers and stores them in a MySQL database.

## Features

- Responsive contact form
- Phone number submission
- MySQL database storage
- Database health-check API
- Express static file serving

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MySQL

## Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=phone_collector
DB_PORT=3306
```

3. Create the database table:

```sql
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Running the Application

Start the server:

```bash
node server.js
```

Open the application in your browser:

```text
http://localhost:3000
```

## API Endpoints

### Check Database Health

```text
GET /api/health
```

### Save a Phone Number

```text
POST /api/contacts
```

Example request:

```json
{
    "phone": "+91 9876543210"
}
```

## Project Structure

```text
phone-collector/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
├── .env
└── README.md
```

## Security

Do not upload your `.env` file to GitHub. Add it to `.gitignore`:

```text
.env
node_modules/
```

## License

This project is for educational and personal use.