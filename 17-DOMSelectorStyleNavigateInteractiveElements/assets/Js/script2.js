document.body.style.background = "#f2f2f2";
document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";

const card = document.querySelector(".property-card");
card.style.width = "350px";
card.style.backgroundColor = "#fff";
card.style.borderRadius = "10px";
card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
card.style.overflow = "hidden";

const img = document.querySelector(".property-image");
img.style.width = "100%";
img.style.display = "block";
card.style.position = "relative";

const info = document.querySelector(".property-info");
info.style.padding = "20px";

const type = document.querySelector(".property-type");
type.style.margin = "0";
type.style.fontSize = "22px";

const price = document.querySelector(".property-price");
price.style.fontSize = "28px";
price.style.color = "#2e86de";
price.style.margin = "10px 0";

const address = document.querySelector(".property-address");
address.style.color = "#555";
address.style.marginBottom = "10px";

const features = document.querySelector(".property-features");
features.style.display = "flex";
features.style.justifyContent = "space-between";
features.style.marginBottom = "20px";

const featureItems = document.querySelectorAll(".feature");
featureItems.forEach((item) => {
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.gap = "5px";
});

const realtor = document.querySelector(".realtor-info");
realtor.style.display = "flex";
realtor.style.alignItems = "center";
realtor.style.borderTop = "1px solid #ddd";
realtor.style.padding = "15px 20px";
realtor.style.gap = "10px";

const realtorImg = document.querySelector(".realtor-photo");
realtorImg.style.width = "40px";
realtorImg.style.height = "40px";
realtorImg.style.borderRadius = "50%";

const realtorPhone = document.querySelector(".realtor-phone");
realtorPhone.style.fontSize = "small";

document.querySelectorAll(".heart").forEach((heart) => {
  heart.style.display = "inline-flex";
  heart.style.alignItems = "center";
  heart.style.justifyContent = "center";
  heart.style.width = "30px";
  heart.style.height = "30px";
  heart.style.borderRadius = "50%";
  heart.style.backgroundColor = "woodsmoke";
  heart.style.position = "absolute";
  heart.style.top = "15px";
  heart.style.right = "15px";
  heart.style.cursor = "pointer";
});
