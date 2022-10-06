import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../../context/Dataprovider';
import { useParams } from 'react-router-dom';
import { ProductoItem } from './productoItem';

export const ProductoDetalle = () => {
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([]);
    const [url, setUrl] = useState('01');
    const [images, setImages] = useState('');
    const params = useParams();
    let item = 0;

    useEffect(() => {
        productos.forEach(producto => {
            item = 0;
            if(producto.id ===parseInt(params.id)){
                setDetalle(producto);
            }
        });
    },[params.id, productos]);

    useEffect(() => {
        const values = `${detalle.img1}${url}${detalle.img2}`;
        setImages(values);
    },[url, params.id, detalle]);

    const handleInput = (e) => {
        const number = e.target.value.toString().padStart(2, '01');
        setUrl(number);
    };

  return (
    <>
        <div className='detalle'>
            <h2>{detalle.title}</h2> 
            <p className='price'>${detalle.price}</p>
            <div className='grid'>
                <p className='nuevo'>Nuevo</p>
                <div className='size'>
                    <select placeholder='Tamaño'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                    <p>Tamaño</p>
                </div>
            </div>
            <button onClick={()=>addCarrito(detalle.id)}>Añadir al carrito</button>
            <img src={images} alt={detalle.title} />
            <input type="range" min="1" max="36" value={url} onChange={handleInput}/>
            <div className='description'>
                <p><b>Description: </b>Un calzado comodo, con colores llamativos,
                muy usado<br/>y asi succesivamente hasta porder rellenar esta mierda
                </p>
            </div>
        </div>
        <h2 className='relacionados'>Productos Relacionados</h2>
        <div className='productos'>
        {
          productos.map((producto) =>{

            if ((item < 6)&&(detalle.category === producto.category)){
                item ++;
                return <ProductoItem
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                category={producto.category}
                cantidad={producto.cantidad}
                />}})
        }    
      </div>

    </>
  )
}
