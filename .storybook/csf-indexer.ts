import { readFile } from 'fs-extra';
import { loadCsf } from '@storybook/csf-tools';

const csfIndexer = async (fileName, opts) => {
  const code = (await readFile(fileName, 'utf-8')).toString();
  return loadCsf(code, { ...opts, fileName }).parse();
};

export const storyIndexers = [  {
  test: /\.[tj]sx?$/,
  indexer: csfIndexer,
}];
