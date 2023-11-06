const div = document.createElement("div");
const anchor = document.createElement("a");
anchor.href = "../index.html";
anchor.innerHTML = "&larr;";
anchor.setAttribute("class", "text-blue-500 hover:text-blue-300");
div.setAttribute(
  "class",
  "absolute top-0 right-0 bg-slate-300 px-2 py-1 rounded-lg m-2 shadow-lg"
);
div.appendChild(anchor);
document.body.appendChild(div);
