const Blog = require("../Database/Blogs");


 // create a Blog
 async function createBlog(req, res, next) {
  let { blogs: blogData } = req.body;

  let blogs = new Blog(blogData);

  await blogs.save();

  return res.send({
    message: "blog has been added",
    data: blogs,
  });
}


//  get all Blogs
async function getBlog(req, res, next) {
  let blogs = await Blog.find();

  return res.send({
    data: blogs,
  });
}
 
    // update a blog
async function updateBlog(req, res, next) {

  let { id } = req.params;

  let { blogs: blogData } = req.body;

  let blogs = await Blog.findById(id);
  for (const [key, value] of Object.entries(blogData)) {
    blogs[key] = value;
  }
  await blogs.save();
  return res.send({
    msg: "Blog has been updated",
    data: blogs,
  });
}

    //   Delete a blog
async function deleteBlog(req, res, next) {
  let { id } = req.params;

  await Blog.findByIdAndDelete(id);

  return res.send({
    msg: "Blog has been deleted",
  });
}

module.exports = {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};