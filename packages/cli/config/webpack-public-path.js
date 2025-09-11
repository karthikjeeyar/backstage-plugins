// This script is used to pick up and set the public path of the Webpack bundle
// at runtime. The meta tag is injected by the app build, but only present in
// the `index.html.tmpl` file. The runtime value of the meta tag is populated by
// the app backend, when it templates the final `index.html` file.
//
// This is needed for additional chunks to use the correct public path, and it
// is not possible to set the `__webpack_public_path__` variable outside of the
// build itself. The Webpack output also does not read any <base> tags or
// similar, this seems to be the only way to dynamically configure the public
// path at runtime.
const el = document.querySelector('meta[name="backstage-public-path"]');
const path = el?.getAttribute('content');
if (path) {
  __webpack_public_path__ = path;
}
