import * as FS from 'fs/promises';

const VARIABLES_FILE_URL = new URL('../docs/variables.json', import.meta.url);

const SCRIPT_SDK_VERSION = await fetch(
  'https://registry.npmjs.org/@digshare/script/latest',
)
  .then(response => response.json())
  .then(data => data.version);

await FS.writeFile(
  VARIABLES_FILE_URL,
  JSON.stringify({
    SCRIPT_SDK_VERSION,
  }),
);
