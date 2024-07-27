export async function getShops() {
  const res = await fetch("https://map-backend-tau.vercel.app/shops");
  if (!res.ok) throw Error(`Couldn't find shops`);

  const { data } = await res.json();
  return data;
}
