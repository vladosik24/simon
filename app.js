const tg = window.Telegram.WebApp;

tg.expand(); // відкриває на весь екран

document.getElementById("btn").onclick = () => {
  const user = tg.initDataUnsafe.user;

  document.getElementById("result").innerText =
    `Привіт, ${user?.first_name || "гравець"}!`;

  // можна відправити дані назад боту
  tg.sendData("button_clicked");
};
