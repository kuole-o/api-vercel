import { promises as fs } from 'fs';
import path from 'path';

/**
 * 复制文件到指定目录
 * @param {string[]} sources - 源文件路径数组
 * @param {string} rootDir - 目标目录
 */
const copyFilesToRoot = async (sources, rootDir) => {
  try {
    // 确保目标目录存在
    await fs.promises.mkdir(rootDir, { recursive: true });

    for (const source of sources) {
      const filename = path.basename(source);
      const destination = path.join(rootDir, filename);

      // 检查源文件是否存在
      if (fs.existsSync(source)) {
        // 复制文件
        await fs.promises.copyFile(source, destination);
        console.log(`${filename} was copied to ${rootDir}`);
      } else {
        console.error(`Source file ${source} does not exist.`);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
};

const rootDir = path.resolve(__dirname);

console.log("准备处理文件拷贝！")
// 调用方法，传入多个源文件路径
copyFilesToRoot([
  'node_modules/guole.fun.api/package.json',
  'public/favicon.png',
  'public/error.png'
], rootDir);

copyFilesToRoot([
  'node_modules/guole.fun.api/package.json'
], path.join(rootDir, 'public'));