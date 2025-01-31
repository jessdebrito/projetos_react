import blogFetch from "../axios/config";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

  const [posts, setposts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");


      const data = response.data;

      setposts(data)

    } catch (error) {
      console.log(error)
    }
  }

  // dá para coordenar a execução na pag. quantas vezes quiser
  useEffect(() => {
    getPosts()
  }, []) // o array vazio faz executar uma unica vez(no loading da page)

  return (
    <div className="home"><h1>Últimos posts:</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title} </h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
        </div>
      )))}
    </div>
  )
}

export default Home