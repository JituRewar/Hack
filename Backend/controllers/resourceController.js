import Resource from "../models/Resource.js";

// Create (Admin only)
export const createResource = async (req, res) => {
  const resource = await Resource.create({
    ...req.body,
    createdBy: req.user.id
  });

  res.json(resource);
};

// Get all
export const getResources = async (req, res) => {
  const resources = await Resource.find().populate("createdBy", "name");
  res.json(resources);
};