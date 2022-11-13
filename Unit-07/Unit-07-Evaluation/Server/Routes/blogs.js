const express = require("express");

const {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../handlers/blogs");

const blogsRouter = express.Router();

blogsRouter.get("/getBlog", getBlog);
blogsRouter.post("/createBlog", createBlog);
blogsRouter.put("/updateBlog/:id", updateBlog);
blogsRouter.delete("/deleteBlog/:id", deleteBlog);

module.exports = blogsRouter;

