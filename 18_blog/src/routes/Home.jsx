import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

  const [posts, setposts] = useState([]);

  const getPosts = async() => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    
      const data = response.data;
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  // dá para coordenar a execução na pag. quantas vezes quiser
  useEffect(() => {
    getPosts()
  }, []) // o array vazio faz executar uma unica vez(no loading da page)

  return (
    <div>Home</div>
  )
}

export default Home