
export const getGifs = async() => {
  
    const url = 'https://api.giphy.com/v1/gifs/trending?api_key=YMOMBUzh7rsc6d7SnrdjxutFXjqLVb5k&limit=10';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}
