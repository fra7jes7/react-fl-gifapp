


export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=yBpvGBlZhU141ouUsAlwM6PNb4ZeqRdQ`;
    // const url = 'http://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=yBpvGBlZhU141ouUsAlwM6PNb4ZeqRdQ';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
        //el signo de ? quiere decir que si vienen las imagenes traigame 
    })

    // console.log(gifs);
    return gifs;
    // setImages(gifs);
}