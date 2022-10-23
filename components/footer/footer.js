import getComponent from "../../functions/getComponent.js";

const footer = document.createElement("footer");

async function queryComponent() {
  try {
    const footerQuery = await getComponent("footer");
    footer.innerHTML = footerQuery;
    document.body.appendChild(footer);
  } catch (e) {
    console.log(e);
  }
}

queryComponent();
