import { init } from "@waline/client";
import "@waline/client/style";

const roots = document.querySelectorAll<HTMLElement>("[data-waline-root]");

roots.forEach((root) => {
  if (root.dataset.walineMounted === "true") {
    return;
  }

  const serverURL = root.dataset.serverUrl;

  if (!serverURL) {
    return;
  }

  init({
    el: root,
    serverURL,
    path: root.dataset.path,
    lang: "zh-CN",
  });

  root.dataset.walineMounted = "true";
});
