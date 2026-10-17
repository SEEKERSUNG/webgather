/* =========================================================
   有用网站大推荐 · WebGather
   渲染、搜索、主题与导航交互
   ========================================================= */

(function () {
  "use strict";

  var data = window.SITE_DATA;
  if (!data) return;

  var sectionsEl = document.getElementById("sections");
  var tocEl = document.getElementById("toc");
  var searchInput = document.getElementById("search");
  var clearBtn = document.getElementById("clearSearch");
  var clearInline = document.getElementById("clearInline");
  var clearEmpty = document.getElementById("clearEmpty");
  var resultsBar = document.getElementById("resultsBar");
  var searchStatus = document.getElementById("searchStatus");
  var emptyState = document.getElementById("emptyState");
  var themeToggle = document.getElementById("themeToggle");
  var toTop = document.getElementById("toTop");
  var statSites = document.getElementById("statSites");
  var statCategories = document.getElementById("statCategories");

  var state = { query: "" };
  var searchTimer = null;

  /* ---------------- 工具函数 ---------------- */

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function highlight(text, query) {
    if (!text) return "";
    if (!query) return escapeHtml(text);

    var source = String(text);
    var lower = source.toLowerCase();
    var needle = query.toLowerCase();
    var out = "";
    var start = 0;

    while (true) {
      var index = lower.indexOf(needle, start);
      if (index === -1) {
        out += escapeHtml(source.slice(start));
        break;
      }
      out += escapeHtml(source.slice(start, index));
      out += "<mark>" + escapeHtml(source.slice(index, index + needle.length)) + "</mark>";
      start = index + needle.length;
    }
    return out;
  }

  function domainOf(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (err) {
      return "";
    }
  }

  function hueFrom(text) {
    var hash = 0;
    for (var i = 0; i < text.length; i += 1) {
      hash = (hash * 31 + text.charCodeAt(i)) % 360;
    }
    return hash;
  }

  function initialOf(name) {
    var chars = Array.from(String(name).trim());
    var first = chars.length ? chars[0] : "•";
    return /[a-z]/i.test(first) ? first.toUpperCase() : first;
  }

  function itemHaystack(item, section, subsection) {
    return [item.name, item.desc || "", item.url, section.name, subsection.name || ""]
      .join(" ")
      .toLowerCase();
  }

  /* ---------------- 侧边导航 ---------------- */

  function buildToc() {
    var html = data.sections
      .map(function (section) {
        var total = section.subsections.reduce(function (sum, subsection) {
          return sum + subsection.items.length;
        }, 0);

        var showSubs =
          section.subsections.length > 1 &&
          section.subsections.some(function (subsection) {
            return subsection.name;
          });

        var subLinks = showSubs
          ? '<div class="toc-sub">' +
            section.subsections
              .map(function (subsection, index) {
                if (!subsection.name) return "";
                return (
                  '<a href="#sub-' +
                  section.id +
                  "-" +
                  index +
                  '">' +
                  escapeHtml(subsection.name) +
                  "</a>"
                );
              })
              .join("") +
            "</div>"
          : "";

        return (
          '<div class="toc-group">' +
          '<a class="toc-link" href="#section-' +
          section.id +
          '">' +
          "<span>" +
          escapeHtml(section.name) +
          "</span>" +
          '<span class="toc-count">' +
          total +
          "</span>" +
          "</a>" +
          subLinks +
          "</div>"
        );
      })
      .join("");

    tocEl.innerHTML = html;
  }

  /* ---------------- 网站卡片 ---------------- */

  function cardHtml(item, query, matched) {
    var domain = domainOf(item.url);
    var hue = hueFrom(domain || item.name);
    var desc = item.desc
      ? '<span class="card-desc">' + highlight(item.desc, query) + "</span>"
      : '<span class="card-desc"></span>';

    return (
      '<a class="card"' +
      (matched ? "" : " hidden") +
      ' href="' +
      escapeHtml(item.url) +
      '" target="_blank" rel="noopener noreferrer">' +
      '<span class="card-badge" style="--h:' +
      hue +
      '" aria-hidden="true">' +
      escapeHtml(initialOf(item.name)) +
      "</span>" +
      '<span class="card-body">' +
      '<span class="card-name">' +
      highlight(item.name, query) +
      "</span>" +
      desc +
      '<span class="card-domain">' +
      escapeHtml(domain) +
      '<span class="card-arrow" aria-hidden="true">↗</span>' +
      "</span>" +
      "</span>" +
      "</a>"
    );
  }

  /* ---------------- 渲染 ---------------- */

  function render() {
    var query = state.query;
    var visibleCount = 0;
    var totalCount = 0;

    var html = data.sections
      .map(function (section, sectionIndex) {
        var sectionCount = 0;

        var subsectionsHtml = section.subsections
          .map(function (subsection, subsectionIndex) {
            var subsectionCount = 0;

            var cardsHtml = subsection.items
              .map(function (item) {
                totalCount += 1;
                var matched =
                  !query || itemHaystack(item, section, subsection).indexOf(query) !== -1;
                if (matched) {
                  subsectionCount += 1;
                }
                return cardHtml(item, query, matched);
              })
              .join("");

            sectionCount += subsectionCount;
            visibleCount += subsectionCount;

            var showTitle = subsection.name && section.subsections.length > 1;
            var hideGroup = query && subsectionCount === 0;

            return (
              '<div class="subsection"' +
              (hideGroup ? " hidden" : "") +
              ' id="sub-' +
              section.id +
              "-" +
              subsectionIndex +
              '">' +
              (showTitle
                ? '<h3 class="subsection-title">' + escapeHtml(subsection.name) + "</h3>"
                : "") +
              '<div class="cards">' +
              cardsHtml +
              "</div>" +
              "</div>"
            );
          })
          .join("");

        var hideSection = query && sectionCount === 0;

        return (
          '<section class="section"' +
          (hideSection ? " hidden" : "") +
          ' id="section-' +
          section.id +
          '">' +
          '<div class="section-head">' +
          '<span class="section-index">' +
          String(sectionIndex + 1).padStart(2, "0") +
          "</span>" +
          '<h2 class="section-title">' +
          escapeHtml(section.name) +
          "</h2>" +
          '<span class="section-count">' +
          sectionCount +
          " 个网站</span>" +
          "</div>" +
          subsectionsHtml +
          "</section>"
        );
      })
      .join("");

    sectionsEl.innerHTML = html;

    statSites.textContent = totalCount;
    statCategories.textContent = data.sections.length;

    var hasQuery = Boolean(query);
    resultsBar.hidden = !hasQuery;
    if (hasQuery) {
      searchStatus.textContent =
        visibleCount > 0 ? "找到 " + visibleCount + " 个结果" : "没有匹配的结果";
    }

    emptyState.hidden = !(hasQuery && visibleCount === 0);
    clearBtn.hidden = !searchInput.value;
    clearInline.hidden = !hasQuery;

    updateActiveToc();
  }

  /* ---------------- 搜索 ---------------- */

  function applyQuery() {
    state.query = searchInput.value.trim().toLowerCase();
    render();
  }

  searchInput.addEventListener("input", function () {
    clearBtn.hidden = !searchInput.value;
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(applyQuery, 90);
  });

  function clearSearch() {
    searchInput.value = "";
    clearBtn.hidden = true;
    window.clearTimeout(searchTimer);
    applyQuery();
    searchInput.focus();
  }

  clearBtn.addEventListener("click", clearSearch);
  clearInline.addEventListener("click", clearSearch);
  clearEmpty.addEventListener("click", clearSearch);

  document.addEventListener("keydown", function (event) {
    var target = event.target;
    var isTyping =
      target &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable);

    if (event.key === "/" && !isTyping && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      searchInput.focus();
      return;
    }

    if (event.key === "Escape" && target === searchInput) {
      if (searchInput.value) {
        clearSearch();
      } else {
        searchInput.blur();
      }
    }
  });

  /* ---------------- 目录高亮 ---------------- */

  function updateActiveToc() {
    var targets = document.querySelectorAll("#sections .section, #sections .subsection");
    var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) || 68;
    var isMobile = window.matchMedia("(max-width: 980px)").matches;
    var offset = headerH + 48 + (isMobile ? 52 : 0);

    var current = null;
    for (var i = 0; i < targets.length; i += 1) {
      var el = targets[i];
      if (el.hidden || el.offsetParent === null) continue;
      if (el.getBoundingClientRect().top - offset <= 0) {
        current = el;
      } else {
        break;
      }
    }

    var links = tocEl.querySelectorAll("a");
    for (var j = 0; j < links.length; j += 1) {
      links[j].classList.remove("active");
    }

    if (!current) return;

    var directLink = tocEl.querySelector('a[href="#' + current.id + '"]');
    if (directLink) directLink.classList.add("active");

    var section = current.closest(".section");
    if (section) {
      var sectionLink = tocEl.querySelector('a[href="#' + section.id + '"]');
      if (sectionLink && sectionLink !== directLink) {
        sectionLink.classList.add("active");
      }
    }
  }

  /* ---------------- 主题 ---------------- */

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      /* ignore */
    }
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "切换浅色模式" : "切换深色模式"
    );
  }

  themeToggle.addEventListener("click", function () {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  /* ---------------- 滚动相关 ---------------- */

  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActiveToc();
      toTop.hidden = window.scrollY < 600;
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  toTop.addEventListener("click", function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------------- 初始化 ---------------- */

  buildToc();
  setTheme(document.documentElement.dataset.theme || "light");
  render();
  onScroll();
})();
