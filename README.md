# lifegpc-sha1
A Node.js module for hashing messages with SHA1.
## Function
```JavaScript
const sha1 = require("lifegpc-sha1");
sha1.sha1("test"); // a94a8fe5ccb19ba61c4c0873d391e987982fbbd3
// The string will encode with UTF-8
sha1.sha1("中文"); // 7be2d2d20c106eee0836c9bc2b939890a78e8fb3
// UInt8Array is also supported.
// Uint8Array(20) [122, 229, 165, 193, 155, 22, 249, 238, 59, 0, 202, 54, 252, 114, 149, 54, 251, 94, 115, 7]
sha1.hash(new Uint8Array([32, 48]));
sha1.HmacSHA1("key", "helloworld"); // 078a9e90cb39d3a3efe3497d035362459b197b56
// Uint8Array(20) [119, 192, 126, 195, 234, 132, 249, 10, 89, 190, 153, 211, 6, 135, 211, 6, 234, 130, 42, 88]
sha1.hashWithHmac(new Uint8Array([32, 48]), new Uint8Array([32, 49]));
```
