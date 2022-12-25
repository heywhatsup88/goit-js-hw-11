import axios from 'axios';

export default async function fetch(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '29413713-a123049087085ca77c45184ac';
  const filter = `key=${key}&q=${value}&image_type=photo&min_width=800&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}?${filter}`).then(response => response.data);
}
