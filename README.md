# Don Austin Adblock

A Manifest V3 Chrome extension that replaces a configurable percentage of images on each visited page with a photo of Don Austin.

## Install

1. Download or clone this repository.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this repository.
5. Pin the extension if desired.

## Use

Open the extension popup, choose a replacement percentage, and click **Save**. Reload a page to apply the new setting. The percentage is stored with `chrome.storage.local`.

## Permissions and limitations

The extension's content script runs in all frames on all URLs and only changes image `src` values; it does not block network requests or detect advertisements. The replacement image is currently referenced through an externally hosted, time-limited URL, so update `link` in `contentScript.js` if images stop loading.
