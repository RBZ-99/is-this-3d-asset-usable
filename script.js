const evidence = {
  beauty: {
    className: "evidence-beauty",
    caption: "Appearance evidence captures overall plausibility, textures, and visible render failures."
  },
  wire: {
    className: "evidence-wire",
    caption: "Wireframe evidence exposes disconnected components, irregular triangulation, density, and geometric clutter."
  },
  uv: {
    className: "evidence-uv",
    caption: "UV seams are shown directly on the surface so their organization can be interpreted in 3D context."
  }
};

const evidenceFrame = document.querySelector("#evidence-frame");
const evidenceCaption = document.querySelector("#evidence-caption");
const evidenceTabs = document.querySelectorAll("[data-evidence]");

evidenceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = evidence[tab.dataset.evidence];
    evidenceTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    evidenceFrame.className = `switcher-frame ${selected.className}`;
    evidenceCaption.textContent = selected.caption;
  });
});

const copyButton = document.querySelector("#copy-bibtex");
copyButton.addEventListener("click", async () => {
  const citation = document.querySelector("#bibtex").textContent;
  try {
    await navigator.clipboard.writeText(citation);
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = "Select and copy";
  }
  window.setTimeout(() => {
    copyButton.textContent = "Copy BibTeX";
  }, 1800);
});
