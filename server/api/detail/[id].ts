import fs from "fs";
import path from "path";
import querystring from 'querystring';
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

import { ApiResponse } from "~/types/api/response";
import type { ArticleDetail } from "~/types/api/detail";
// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id') || '';
    let content = '';
    let title = '';
    // let res:ApiResponse<ArticleDetail>;
    let res:ArticleDetail;
    const fileName = querystring.unescape(id) + ".md";
        
    // 获取文章内容
    const fullPath = path.join(postsDir, fileName);
    try {
        fs.accessSync(fullPath);

        const fileContent = fs.readFileSync(fullPath, "utf-8");

        // 解析扉页信息
        const matterInfo = matter(fileContent);

        // 转换markdown为HTML
        const processedContent = await remark().use(html).processSync(matterInfo.content);
        content = processedContent.toString();

        if(matterInfo.data && matterInfo.data.title) {
            title = matterInfo.data.title;
        }

        res = {
            title,
            content
        }
        return res;
    } catch (error) {
        // 没有此文章或没有访问权限
        /**
         * cerateError 可以return 也可以 throw
         * return 作为data返回
         * throw 作为错误抛出
         * 猜想： 如果 statusCode的值是404 nuxt内部会做特殊处理，因为原则上404是需要跳转到单独的404页面的，此时自定义的错误信息无法传递到客户端 
         */
        throw createError({
            message: 'sdfsdf qqq',
            statusCode: 404,
            statusMessage: '文章不存在',
            data: {
                msg: 'this is test',
                code: -1
            }
        });

        // throw createError('dfdf rrttt');
    }
        
})
