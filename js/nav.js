const handleDropdownClicked = (event) => {
  event.stopPropagation();
  const dropdownMenu = event.target.closest(".hambi-dropdown__menu");
  toggleDropdownMenu(dropdownMenu);
  adjustMenuPositions(); // Menüpozíciók beállítása a labelhez
};

const toggleDropdownMenu = (dropdownMenu) => {
  const dropdownIcon = dropdownMenu.querySelector(".material-symbols-outlined");

  if (!dropdownMenu.classList.contains("open")) {
    closeAllDropdownMenus(); // Bezárjuk az összes másik nyitott menüt
    dropdownMenu.classList.add("open");
  } else {
    dropdownMenu.classList.remove("open");
  }

  dropdownIcon.innerText = dropdownMenu.classList.contains("open")
    ? "close"
    : "expand_more";
};

const closeAllDropdownMenus = () => {
  const openMenus = document.querySelectorAll(".hambi-dropdown__menu.open");
  openMenus.forEach(menu => {
      menu.classList.remove("open");
      const dropdownIcon = menu.querySelector(".material-symbols-outlined");
      dropdownIcon.innerText = "expand_more";
  });
};

const adjustMenuPositions = () => {
  const dropdownMenus = document.querySelectorAll(".hambi-dropdown__menu");
  dropdownMenus.forEach(menu => {
    const dropdownLabels = menu.querySelector(".dropdown__menu-labels");

    if (dropdownLabels && menu.classList.contains("open")) {
      const labelHeight = dropdownLabels.offsetHeight;
      menu.style.paddingBottom = `${labelHeight}px`;
    } else {
      menu.style.paddingBottom = ""; // Visszaállítjuk a paddinget az eredeti értékre
    }
  });
};

document.body.addEventListener("click", () => closeAllDropdownMenus());

// Megkeressük az összes dropdown menüt és hozzáadjuk az eseménykezelőt
const dropdownMenus = document.querySelectorAll(".hambi-dropdown__menu");
dropdownMenus.forEach((menu, index) => {
  const dropdownButton = menu.querySelector("button");
  const dropdownIcon = menu.querySelector(".material-symbols-outlined");
  const dropdownIconId = `dropdown-icon-${index + 1}`; // Egyedi azonosító generálása
  dropdownIcon.id = dropdownIconId; // Beállítjuk az egyedi id-t
  dropdownButton.addEventListener("click", handleDropdownClicked);
});

document.addEventListener('DOMContentLoaded', function () {
  var navIcon2 = document.getElementById('nav-icon2');
  var nav = document.querySelector('nav');
  var dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('hambi-dropdown__menu');
  dropdownMenu.innerHTML = nav.innerHTML;
  dropdownMenu.style.display = 'none';
  dropdownMenu.style.marginTop = '6rem'; // Felső margó hozzáadása
  document.body.insertBefore(dropdownMenu, document.body.firstChild.nextSibling);

    navIcon2.addEventListener('click', function () {
      this.classList.toggle('open');
      if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
      } else {
        dropdownMenu.style.display = 'none';
      }
    });
  });
