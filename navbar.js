function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const logoCenter = document.getElementById("logoCenter");
  const logoLeft = document.getElementById("logoLeft");
  const headerNav = document.getElementById("headerNav");
  const imgLeft = document.getElementById("imgLeft");
  const itemLeft = document.getElementById("itemLeft");
  const imgRight = document.getElementById("imgRight");
  const itemRight = document.getElementById("itemRight");
  const breakingNews = document.getElementById("breakingNews");


  if (window.scrollY > 120) {
    // ===== SESUDAH SCROLL =====
      navbar?.classList.add("navbar-shrink");
    itemLeft?.classList.add("nav-scroll-left");
    itemRight?.classList.add("nav-scroll-right");

    imgLeft?.classList.add("d-none");
    imgRight?.classList.add("d-none");

    logoCenter?.classList.add("d-none");
    logoLeft?.classList.remove("d-none");

    headerNav?.classList.add("nav-header-up");

    breakingNews?.classList.remove("breaking-news-down");
    breakingNews?.classList.add("breaking-news-up");
  } else {
    // ===== SEBELUM SCROLL =====
     navbar?.classList.remove("navbar-shrink");
    itemLeft?.classList.remove("nav-scroll-left");
    itemRight?.classList.remove("nav-scroll-right");

    imgLeft?.classList.remove("d-none");
    imgRight?.classList.remove("d-none");

    logoCenter?.classList.remove("d-none");
    logoLeft?.classList.add("d-none");

    headerNav?.classList.remove("nav-header-up");

    breakingNews?.classList.add("breaking-news-down");
    breakingNews?.classList.remove("breaking-news-up");
  }
}

window.addEventListener("scroll", handleNavbarScroll);
document.addEventListener("DOMContentLoaded", handleNavbarScroll);
