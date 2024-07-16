"use strict";
exports.__esModule = true;
exports.config = void 0;
var server_1 = require("next/server");
function middleware(request) {
    var accessToken = request.cookies.get("accessToken");
    if (!accessToken) {
        return server_1.NextResponse.redirect(new URL("/", request.url));
    }
}
exports["default"] = middleware;
exports.config = {
    matcher: ["/myportpolio/:path*", "/myprofile/:path*"]
};
