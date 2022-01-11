export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=APmWIk2PG1Hj2Nw8Bkf0inwV3r57RrgU`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  //Al declarar "const gifs" lo que se quiere hacer es MUTAR el array original dado que "const {data}" me trae muchisimas mas cosas que no me interesan. Por eso filtro por: id, title y url:
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
