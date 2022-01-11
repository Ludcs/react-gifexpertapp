import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
//import {getGifs} from '../helpers/getGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
  //const [images, setImages] = useState([]);

  const {data: images, loading} = useFetchGifs(category);

  /* useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]); */

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        <ol>
          {/* {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))} */}

          {/* Lo mismo pero DESESTRUCTURANDO el .id y el .title: */}
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};
