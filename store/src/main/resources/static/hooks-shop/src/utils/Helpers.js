// import url from "./URL";

// export function flattenProducts(data) {
//   return data.map((item) => {
//     let photoUrl = `${url}${item.photoUrl.url}`;
//     return { ...item, photoUrl };
//   });
// }

export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}

// fuction for pagination
export function paginate(products) {
  const productsPerPage = 6;
  const numberOfPages = Math.ceil(products.length / productsPerPage);

  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * productsPerPage;
    return products.slice(start, start + productsPerPage);
  });

  return newProducts;
}
