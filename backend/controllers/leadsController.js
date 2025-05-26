const Lead = require('../models/leadModel');

exports.createLead = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    
    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const leadId = await Lead.create({ name, email, company, message });
    
    // In a real application, you would trigger the n8n webhook here
    // For example:
    // await axios.post(process.env.N8N_WEBHOOK_URL, { name, email, company, message });
    
    res.status(201).json({
      status: 'success',
      data: {
        leadId,
        name,
        email,
        company,
        message
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.getAll();
    res.status(200).json({
      status: 'success',
      results: leads.length,
      data: {
        leads
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};