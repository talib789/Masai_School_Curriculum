import React from 'react'
import { useNavigate } from 'react-router-dom';

function Blogs() {
    const [blogs, setBlogs] = React.useState([])
    const [input, setInput] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [content, setContent] = React.useState('')
    const token = localStorage.getItem('token');
    const [update, setUpdate] = React.useState(false);
    const [newinput, setnewInput] = React.useState('')
    const [newCategory, setNewCategory] = React.useState('')
    const [newAuthor, setNewAuthor] = React.useState('')
    const [newContent,setNewContent] = React.useState('')
    const navigate = useNavigate();

    const handleAdd = async () => {
        const body = {
            title: input,
            category,
            author,
            content
        }
        console.log(body)
        try{
            await fetch('http://localhost:3008/createBlog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(body)
            });           
            setInput('');
            setCategory('');
            setAuthor('');
            setContent('');
            getAllBlogs();
        } catch (error) {
            console.log(error)
        }
    }

    const getAllBlogs = async () => {
        try {
            let data = await fetch('http://localhost:3008/getAllBlogs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            });
            let response = await data.json();
            console.log(response);
            if (typeof response === 'object') {
                setBlogs(response)
            }
            else {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            let data = await fetch('http://localhost:3008/deleteBlog', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify({
                    id: id
                })
            });
            let res = await data.json();
            alert(res.message);
            getAllBlogs();
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async (id) => {
        try {
            let data = await fetch('http://localhost:3008/updateBlog', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify({
                    id: id,
                    title: newinput,
                    category: newCategory,
                    author: newAuthor,
                    content: newContent
                })
            });
            let res = await data.json();
            alert("blog updated");
            setnewInput('');
            setNewCategory('');
            setNewAuthor('');
            setNewContent('');
            getAllBlogs();
        } catch (error) {
            console.log(error)
        }
    }


    React.useEffect(() => {
        getAllBlogs();
    }, []);


    return (
        <div>
            <div style={{display:"flex"}}>
            <p>Title : </p>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <p>category: </p>
                <input type="text" value={author} onChange={(e) => setCategory(e.target.value)} />
                <p>author : </p>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <p>Content : </p>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                <button onClick={handleAdd}>ADD</button>
            </div>
            <div>
                {blogs?.map((blogs, index) => {
                    return <div key={index}>
                        <p>Title : {blogs.title}</p>
                        <p>category : {blogs.category}</p>
                        <p>author : {blogs.author}</p>
                        <p>Content: {blogs.content}</p>
                        <button onClick={() => { handleDelete(blogs._id) }}>DELETE</button>
                        <button onClick={() => { setUpdate(true) }}>UPDATE</button>
                        <div>
                            {
                                update ?
                                    <div style={{display:"flex"}}>
                                        <p>Title : </p>
                                        <input type="text" value={newinput} onChange={(e) => setnewInput(e.target.value)} />
                                        <p>Category : </p>
                                        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                                        <p>Author : </p>
                                        <input type="text" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
                                        <p>Content : </p>
                                        <input type="text" value={newContent} onChange={(e) =>setNewContent(e.target.value)} />
                                        <button onClick={() => { setUpdate(false); getAllBlogs() }}>CANCEL</button>
                                        <button onClick={() => { handleUpdate(blogs._id); setUpdate(false); getAllBlogs() }}>UPDATE</button>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Blogs
