document.body.classList.add("pt-6", "pb-28");

const sectionLabels = document.getElementsByClassName("section-label");

for (let i = 0; i < sectionLabels.length; i++) {
  sectionLabels[i].classList.add(
    "text-2xl",
    "font-medium",
    "text-slate-600",
    "bg-slate-100",
    "mb-1"
  );

  if (i > 0) {
    sectionLabels[i].classList.add("mt-6");
  }
}
