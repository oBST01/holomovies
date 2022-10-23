export default async function getComponent(componentName) {
  try {
    const query = await fetch(
      `./components/${componentName}/${componentName}.html`
    );
    return query.text();
  } catch (e) {
    console.log(e);
  }
}
