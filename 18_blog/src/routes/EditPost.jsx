import blogFetch from "../axios/config"; // para fazer edição
import { useState, useEffect } from "react"; //pendurar valores e puxar
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`)
      const data = response.data;
      setTitle(data.title);
      setBody(data.body);

    } catch (error) {
      console.log(error)

    }
  };

  const editPost = async (e) => {
    e.preventDefault()
    const post = { title, body, userId: 1 };

    await blogFetch.put(`/posts/${id}`, { 
      body: post,
     });

     navigate("/");
  }

  useEffect(() => {
    getPost();
  })

  return (
    <div className="new-post">
      <h2>Editando: {title} </h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor='title'>Título:</label>
          <input type="text"
            name="title"
            id="title"
            placeholder='Digite o título'
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""} />


          <label htmlFor='body'>Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder='Digite o conteúdo...'
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>

          <input type="submit" value="Editar Post" className="btn" />

        </div>
      </form>
    </div>
  )
}

export default EditPost