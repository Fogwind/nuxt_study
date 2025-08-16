import {H3Event} from 'h3';

export default defineEventHandler((event) => {
    // 请求不被允许的时候返回响应错误
    const isAllowed = protectAuthRoute(event);
    if(!isAllowed) {
        return sendError(
            event,
            createError({
                statusCode: 401,
                statusMessage: 'Unauthorized',
            })
        );
    }
});

function protectAuthRoute(event: H3Event) {
    const protectRoutes = ['/api/detail'];
    if(!event?.path || !protectRoutes.some((route) => event.path?.startsWith(route))) {
        return true;
    }
    return authCheck(event);
}

function authCheck(event: H3Event) {
    const token = getHeader(event, 'token');
    if(!token) {
        return false;
    }
    return true;
}