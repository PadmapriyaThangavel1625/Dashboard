export async function getCategories() {
  const res = await fetch(
    "https://sbstechnologies.in/ecommerce/api/categories.php",
    { cache: "no-store" }
  );

  const text = await res.text();

  try {
    const data = JSON.parse(text);
    return data?.data || [];
  } catch (err) {
    console.log("API is not returning JSON:", text);
    return [];
  }
}