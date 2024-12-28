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
    await fs.mkdir(rootDir, { recursive: true });

    for (const source of sources) {
      const filename = path.basename(source);
      const destination = path.join(rootDir, filename);

      // 检查源文件是否存在
      try {
        await fs.access(source);  // 使用异步的 access 方法检查文件是否存在
        // 复制文件
        await fs.copyFile(source, destination);
        console.log(`${filename} was copied to ${rootDir}`);
      } catch (err) {
        console.error(`Source file ${source} does not exist.`);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
};

// 计算 rootDir，确保路径处理正确
const rootDir = path.resolve(new URL('.', import.meta.url).pathname);
console.log(rootDir);


// 输出调试信息
console.log("准备处理文件拷贝！");

// 调用方法，传入多个源文件路径
copyFilesToRoot([
  'public/favicon.png',
  'public/error.png'
], rootDir);

// 目标路径的拷贝
copyFilesToRoot([
  'node_modules/guole.fun.api/package.json'
], path.join(rootDir, 'public'));