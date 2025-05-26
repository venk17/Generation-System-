# Lead Generation System

A simple lead generation system with email notifications powered by n8n workflow automation.

## System Components

1. **Frontend**: React application with a lead generation form
2. **Backend**: Node.js/Express API with MySQL database
3. **Automation**: n8n workflow for email notifications

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MySQL database
- n8n instance
- SMTP email service (or SendGrid/Mailgun account)

### Backend Setup

1. Navigate to the `backend` folder
2. Create a `.env` file based on the `.env.example`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

### Frontend Setup

1. Navigate to the `frontend` folder
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Database Setup

1. Create a MySQL database named `lead_generation`
2. Run the SQL script provided in the documentation to create the `leads` table

### n8n Workflow Setup

1. Import the provided workflow JSON into your n8n instance
2. Configure the email node with your SMTP credentials
3. Update the webhook URL in your backend `.env` file

## API Endpoints

- `POST /api/leads` - Submit a new lead
- `GET /api/leads` - Retrieve all leads

## Future Extensions

1. **CRM Integration**: Connect to HubSpot, Salesforce, or other CRM systems
2. **Lead Scoring**: Add qualification logic to score leads
3. **Double Opt-in**: Add email verification for leads
4. **Dashboard**: Add an admin dashboard to view and manage leads
5. **SMS Notifications**: Add Twilio integration for SMS alerts
