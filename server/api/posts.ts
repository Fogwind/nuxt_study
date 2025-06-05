import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler((event) => {
    // 分页
    const query = getQuery(event);
    const page = Number(query.page);
    const size = Number(query.size);
    const fileNames = fs.readdirSync(postsDir);
    const posts = fileNames.map((fileName) => {
        // 获取文件名作为文章标题
        const name = fileName.replace(/.md$/,"");

        // 获取文章标题和创建日期
        const fullPath = path.join(postsDir, fileName);
        const fileContents = fs.readFileSync(fullPath,'utf8');
        const matterInfo = matter(fileContents); // 提取markdow元数据
        const fileInfo = fs.statSync(fullPath);
        let title = '', id = '';
        if(matterInfo.data && matterInfo.data.title) {
            title = matterInfo.data.title;
        }
        if(matterInfo.data && matterInfo.data.id) {
            id = matterInfo.data.id;
        }
        return {
            id,
            name,
            title,
            date: fileInfo.ctime,
        };
    });

    const start = (page - 1) * size;
    const end = start + size;
    // 降序排序
    return posts.sort((a,b) => (a.date < b.date ? 1 : -1)).slice(start, end);
})