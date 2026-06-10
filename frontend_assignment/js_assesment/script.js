const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const addBtn = document.getElementById("addBtn");
const preview = document.getElementById("preview");
const error = document.getElementById("error");
const empty = document.getElementById("empty");
const themeBtn = document.getElementById("themeBtn");

let links = JSON.parse(localStorage.getItem("links")) || [];

function isValidURL(url) {
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function saveLinks() {
  localStorage.setItem("links", JSON.stringify(links));
}

function renderLinks() {
  preview.innerHTML = "";

  if (links.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  links.forEach((link, index) => {
    const div = document.createElement("div");
    div.className = "link-item";

    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "link-btn";
    a.textContent = link.title;

    const del = document.createElement("button");
    del.className = "delete-btn";
    del.setAttribute("data-index", index);
    del.textContent = "✕";
    del.setAttribute("aria-label", `Delete ${link.title}`);

    div.appendChild(a);
    div.appendChild(del);
    preview.appendChild(div);
  });
}

addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();

  if (!title || !url) {
    error.textContent = "Both fields are required.";
    return;
  }

  if (!isValidURL(url)) {
    error.textContent = "Please enter a valid URL (http:// or https://).";
    return;
  }

  error.textContent = "";

  links.push({ title, url });
  saveLinks();
  renderLinks();

  titleInput.value = "";
  urlInput.value = "";
});

titleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

preview.addEventListener("click", (e) => {
  const del = e.target.closest(".delete-btn");
  if (!del) return;

  const index = del.getAttribute("data-index");
  links.splice(index, 1);
  saveLinks();
  renderLinks();
});

// --- Theme Engine ---

const STORAGE_THEME_KEY = "biostack-theme";

function getSavedTheme() {
  return localStorage.getItem(STORAGE_THEME_KEY) || "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(STORAGE_THEME_KEY, next);
}

themeBtn.addEventListener("click", toggleTheme);

applyTheme(getSavedTheme());
renderLinks();