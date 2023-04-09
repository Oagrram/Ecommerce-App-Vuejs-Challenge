export const GetResources = async () => {
  const URL = "http://localhost:3000/categories";
  const respons = await fetch(URL);
  const data = await respons.json();

  return data;
};
export const GetProductsBycategorie = async (id) => {
  const URL = "http://localhost:3000/categories/" + id;
  const respons = await fetch(URL);
  const data = await respons.json();

  return data.products;
};

export const GetProductByCategorie = async (category, id) => {
  const URL = `http://localhost:3000/categories/${category}`;
  const respons = await fetch(URL);
  const data = await respons.json();

  return data.products.find((product) => {
    return product.id === parseInt(id);
  });
};

export const GetProductById = async (id) => {
  const URL = `http://localhost:3000/categories/`;
  const respons = await fetch(URL);
  const data = await respons.json();

  return data
    .flatMap((category) => category.products)
    .find((product) => product.id === parseInt(id));
};
