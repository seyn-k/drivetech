import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message, subscribe } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email and message are required" });
    }

    const newContact = new Contact({
      name,
      email,
      message,
      subscribe: !!subscribe
    });

    await newContact.save();

    return res.status(201).json({ success: true, contact: newContact });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
