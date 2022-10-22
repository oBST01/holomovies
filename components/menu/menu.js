import getComponent from "../../functions/getComponent.js";

const menu = document.createElement("header");

async function queryComponent() {
  try {
    const menuQuery = await getComponent("menu");
    menu.innerHTML = menuQuery;
    document.body.appendChild(menu);
  } catch (e) {
    console.log(e);
  }
}

queryComponent();
