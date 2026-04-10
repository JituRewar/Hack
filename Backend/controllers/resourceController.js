import Resource from "../models/Resource.js";

// Create resource
export const createResource = async (req, res) => {
  const resource = await Resource.create(req.body);
  res.json(resource);
};

// Get all resources
export const getResources = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};