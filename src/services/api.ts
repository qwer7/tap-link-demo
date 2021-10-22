export default {
  async getImages(count = 3): Promise<string[]> {
    const defaultSrc = 'https://via.placeholder.com/300.png/909/fff';
    let arr = new Array(count).fill(defaultSrc);

    const results = [];
    for (let i = 0; i < arr.length; i += 1) {
      results.push(fetch('https://picsum.photos/400/300'));
    }
    const res = await Promise.all(results);
    arr = res.map((response) => (response.ok ? response.url : defaultSrc));

    return arr;
  },
};
