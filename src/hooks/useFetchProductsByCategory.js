
import { useEffect, useState } from "react";

export default function useFetchProducts(){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then(setProducts);
  }, [setProducts]);
return products
}