import React, {Fragment, useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  //const handleAdd = () => {
  //setCategories([...categories, 'Caballeros del Zodíaco']); //OTRA OPCIÓN(sabiendo que la actualización del estado siempre recibe un callback) es:
  //setCategories((cats)=>[...cats, 'Caballeros del Zodíaco']);

  return (
    <Fragment>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* NO USAR EL 'key' CON SU VALOR DEL 'indice' EN EL '.map'. El 'key' debe ser UNICO:
      <ol>
        {categories.map((category, indice) => {
          return (
            <li key={indice}>
              {indice + 1} {category}
            </li>
          );
        })}
      </ol> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};

export default GifExpertApp;
