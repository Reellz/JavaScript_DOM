const toggleBtn = document.getElementById("theme-toggle");

function applyTheme() {
  const storedTheme = localStorage.getItem("websiteTheme");

  document.body.classList.remove("light", "dark");

  if (storedTheme) {
    document.body.classList.add(storedTheme);
  } else {
    document.body.classList.add("light");
    localStorage.setItem("websiteTheme", "light");
  }
}

function toggleTheme() {
  if (document.body.classList.contains("light")) {
    document.body.classList.replace("light", "dark");
    localStorage.setItem("websiteTheme", "dark");
  } else {
    document.body.classList.replace("dark", "light");
    localStorage.setItem("websiteTheme", "light");
  }
}

toggleBtn.addEventListener("click", toggleTheme);
applyTheme();
