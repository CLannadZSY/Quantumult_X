/**
 * bypass.js
 * Quantumult X — script-request-header
 * 作用：不修改请求头，原样放行
 *
 * 规则示例（你已给出）：
 * ^https?:\/\/statistic\.live\.126\.net\/statics\/report\/common\/form url script-request-header https://raw.githubusercontent.com/CLannadZSY/Quantumult_X/refs/heads/master/scripts/bypass.js
 */

if (typeof $request !== 'undefined' && typeof $done === 'function') {
  // 直接返回原始 headers（不做任何修改）
  $done({ headers: $request.headers });
} else {
  // 兼容非 QX 环境的简单导出（方便在其他环境做单元测试）
  module.exports = (request) => {
    return { headers: (request && request.headers) || {} };
  };
}
