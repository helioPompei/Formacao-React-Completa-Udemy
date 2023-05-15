// CSS 
import './App.css'
// REACT HOOKS 
import { useState, useEffect } from 'react';
// CUSTOM HOOKS
import { useFetch } from './hooks/useFetch';
// URL BASE 
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([])

  // 4 - custom hook 

  const {data: items, httpConfig } = useFetch(url);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - Resgatando dados: 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data)
  //   }
  //   fetchData();
  // }, []);

  // 2 - Add de produtos: 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name: name,
      price: price
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento dinâmico 
    // const addedProduct = await res.json();
    // console.log(addedProduct)
    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // 5 - refatorando post 
    httpConfig(product, "POST");
    
    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1> Lista de Produtos </h1>
      <ul>
        {items && items.map((product) => (<li key={product.id}>{product.name} - R$: {product.price} </li>))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit} >

          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name">
            </input>
          </label>

          <label>
            Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price">
            </input>
          </label>

          <button type="submit"> Criar </button>
        </form>
      </div>
    </div>
  )
}

export default App
