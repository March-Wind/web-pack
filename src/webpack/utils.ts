import path from 'path';
import { createHash } from 'crypto';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

//解决作为npm包时，产生的依赖包安装位置不同的问题，这是npm的包依赖管理机制导致的。
const requirePackage = (packageName: string) => {
  let content = null;
  try {
    // content = require(path.resolve(__dirname, `../node_modules/${packageName}`));
    content = require(path.resolve(process.env.NODE_MODULES_PATH, `./${packageName}`));
  } catch (err) {
    content = packageName;
  }
  return content;
};

const createEnvironmentHash = (env: Record<string, any>) => {
  const hash = createHash('md5');
  hash.update(JSON.stringify(env));

  return hash.digest('hex');
};

export { requirePackage, createEnvironmentHash };
