function getImgUrls() {
  const key = "43470395-3f5b33ee44774d30b88924ff0";
  const ids = [972910, 1357212, 1372349, 972907, 3245426, 1338840, 1125790, 1338825];
  const urls = [];

  ids.forEach(async (id, index) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${key}&id=${id}&image_type=photo`,
      { mode: "cors" }
    );
    const imgData = await response.json();
    urls.push(imgData.hits[0].largeImageURL);
  });

  return urls;
}

export { getImgUrls };
