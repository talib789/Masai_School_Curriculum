# EXPRESS - FILE UPLOADER
- when you upload a file, it goes as a special type of request known as multipart/formdata
- You cannot upload a file as a json.
- there's a special middlewares to accept a file uploaded by frontend called as multer
- checkout multer and implement a route /upload to receive a file from any frontend and store it on your machine on server under 'uploads' directory
- Hint:

- the multer middleware is pretty easy to use.
- from frontend when you upload a file you create something called as Form Data.
- a formdata is basically named key-value storage, sent over HTTP.
- from frontend if you are uploading a file like this
