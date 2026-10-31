const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".topbar nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

const serviceDetails = {
  "Certificates": "A real service portal may provide certificate application instructions, required documents, eligibility criteria and official application links.",
  "Welfare support": "A real portal should explain eligibility, required documents, application steps and the department responsible for each welfare programme.",
  "Housing": "A real portal may guide citizens to official housing assistance information, eligibility rules and application channels.",
  "Education": "A real portal may list scholarship information, eligibility requirements, deadlines and official application links."
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.querySelectorAll("[data-info]").forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.info;
    modalTitle.textContent = service;
    modalText.textContent = serviceDetails[service];
    modal.hidden = false;
  });
});

function closeModal() {
  modal.hidden = true;
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOk").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

const searchInput = document.getElementById("schemeSearch");
const schemeCards = [...document.querySelectorAll(".scheme-card")];
const emptyState = document.getElementById("emptyState");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  schemeCards.forEach((card) => {
    const matches = (card.dataset.search + " " + card.textContent).toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visibleCount++;
  });
  emptyState.hidden = visibleCount !== 0;
});

document.getElementById("trackerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const reference = document.getElementById("reference").value.trim().toUpperCase();
  const result = document.getElementById("statusResult");

  if (reference === "CC2026001") {
    result.textContent = "Sample result: Application received → Document review pending. This is demonstration data only.";
    result.style.color = "#287447";
  } else {
    result.textContent = "No sample record found. Try the demo reference CC2026001.";
    result.style.color = "#a34b36";
  }
});
