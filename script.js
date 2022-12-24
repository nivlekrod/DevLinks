function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector(".profile img");

  html.classList.contains("light")
    ? img.setAttribute("src", "./assets/avatar-light.png")
    : img.setAttribute("src", "./assets/avatar.png");
}