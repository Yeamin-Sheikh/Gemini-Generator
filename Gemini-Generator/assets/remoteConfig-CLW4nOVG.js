const localConfig = {
  version: "1.1",
  selectors: {
    newChat: 'gem-icon-button:has(mat-icon[data-mat-icon-name="gemini_chat"]), gem-icon:has(mat-icon[data-mat-icon-name="gemini_chat"])',
    removeSelectedModeButton: 'button:has(mat-icon[data-mat-icon-name="close"]):last()',
    moreChatButton: 'button:has(mat-icon[data-mat-icon-name="menu"])',
    moreToolsButton: 'simplified-input-menu',
    uploadImageButton: 'images-files-uploader',
    promptTextarea: 'rich-textarea',
    submitButton: 'button:has(mat-icon[data-mat-icon-name="arrow_upward"])',
    loadingButton: 'button:has(mat-icon[data-mat-icon-name="stop"])',
    outputItems: 'model-response:last()',
    outputImageItem: 'model-response:last() img:visible',
    moreOptionOutputItem: 'button:has(mat-icon[data-mat-icon-name="more_horiz"]):last()',
    downloadImageOption: 'gem-menu-item[leadingicon="download"]',
    downloadHoverImageOption: 'button:has(mat-icon[data-mat-icon-name="download"]):last()',
    downloadImageButton: 'expansion-dialog download-generated-image-button',
    backDownloadImageButton: 'button:has(mat-icon[data-mat-icon-name="arrow_back"])',
    uploadImageProgress: 'div[class*="mdc-circular-progress"]'
  }
};

function t(t, n) {
  return true;
}

async function r() {
  return localConfig;
}

export { r as g, t as i };
