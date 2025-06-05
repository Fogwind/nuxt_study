import fs from "fs";
import path from "path";
import querystring from 'querystring';
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    let content = '';
    let title = '';
    if(id) {
        const fileName = querystring.unescape(id) + ".md";
        
        // 获取文章内容
        const fullPath = path.join(postsDir, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf-8");

        // 解析扉页信息
        const matterInfo = matter(fileContent);

        // 转换markdown为HTML
        const processedContent = await remark().use(html).processSync(matterInfo.content);
        content = processedContent.toString();

        if(matterInfo.data && matterInfo.data.title) {
            title = matterInfo.data.title;
        }
    }
    return {
        title,
        content,
    }
})
