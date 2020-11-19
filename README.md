# vue-cli-plugin-pdfjs-viewer

The mozilla [pdf.js viewer](https://mozilla.github.io/pdf.js/web/viewer.html) as an NPM package.


## Updating

In order to update the viewer, pdf.js [needs to be built](https://github.com/mozilla/pdf.js#building-pdfjs) and copied into the `assets` folder.
After copying the following patch must be applied to the [viewer.html](assets/web/viewer.html):

```html
<style>
/* Hide upload and bookmark button */
#openFile, #viewBookmark {
  display: none;
}
</style>
```

**NOTE** this patch must be added after the `viewer.css`.
