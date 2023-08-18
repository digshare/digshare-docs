export const SCRIPT_SDK_VERSION = await fetch(
  'https://registry.npmjs.org/@digshare/script/latest',
)
  .then(response => response.json())
  .then(data => data.version);
