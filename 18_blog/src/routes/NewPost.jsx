import blogFetch from "../axios/config";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // simular um redirect, quando o user adicionar um novo post, será redirecionado pra a home
import "./NewPost.css"

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };

    await blogFetch.post ("/posts", {
      body: post,
    });
    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor='title'>Título:</label>
          <input type="text"
            name="title"
            id="title"
            placeholder='Digite o título'
            onChange={(e) => setTitle(e.target.value)} />


          <label htmlFor='body'>Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder='Digite o conteúdo...'
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <input type="submit" value="Criar Post" className="btn" />

        </div>
      </form>
    </div>
  )
}

export default NewPost