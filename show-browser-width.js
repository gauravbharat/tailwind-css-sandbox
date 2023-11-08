function showBrowserWidth() {
  const width = window.innerWidth;

  let colour = "bg-black";

  switch (true) {
    case width >= 1536:
      colour = "bg-red-800";
      break;

    case width >= 1280:
      colour = "bg-purple-800";
      break;

    case width >= 1024:
      colour = "bg-yellow-800";
      break;

    case width >= 768:
      colour = "bg-blue-800";
      break;

    case width >= 640:
      colour = "bg-green-800";
      break;

    default:
    //
  }

  document.querySelector(
    "h1"
  ).innerHTML = `<span>Width: ${width}</span><span>Colour: ${colour}</span>`;
}

window.onload = showBrowserWidth;
window.onresize = showBrowserWidth;
