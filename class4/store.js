/*let a = 22;
let b = "Kaviya";
let c = "shri1204@gmail.com";*/
let mobile = [
  {
    product: 1,
    brand: "Samsung",
    model: "Galaxy A21",
    image:
      "https://m.media-amazon.com/images/I/61VpKrDeFkL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Samsung Galaxy M16 5G (Mint Green, 8GB RAM, 128 GB Storage) | MediaTek Dimensity 6300 | AnTuTu Score 422K+ | Super Amoled Display | 25W Fast Charging | 6 Gen. of OS",
    price: 80000,
  },

  {
    product: 2,
    brand: "Samsung",
    model: "Galaxy A16",
    image:
      "https://m.media-amazon.com/images/I/711fYUFXhcL._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "Samsung Galaxy A16 5G (Blue Black, 6GB RAM, 128GB Storage) | Super AMOLED | 50MP Triple Camera with Ultra Wide Lens | 6 OS & 6 Years Security Updates | IP54 | Tap & Pay | 5000mAh",
    price: 70000,
  },

  {
    product: 3,
    brand: "Apple",
    model: "i-Phone",
    image:
      "https://m.media-amazon.com/images/I/61JvFLHZ6NL._AC_SR230,210_QL70_.jpg",
    description:
      "iPhone 16 Pro 128 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium",
    price: 180000,
  },

  {
    product: 4,
    brand: "Redmi",
    model: "Redmi 13",
    image:
      "https://m.media-amazon.com/images/I/41Qk2Ca0TEL._SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "Redmi 13 5G, Orchid Pink, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment",
    price: 80000,
  },
];
const con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
    <div>
    <center><img src=${mobile[i].image}></img></center>
    <h1>${mobile[i].brand}</h1>
    <p>${mobile[i].description}</p>
    <p>${mobile[i].price}</p>
    <button onclick="cart(${mobile[i].product})">Add to cart</button>
    </div>`;
}
let arr = [];
function cart(proid) {
  arr.push(mobile[proid - 1]);
  localStorage.setItem("cartdata", JSON.stringify(arr));
}
