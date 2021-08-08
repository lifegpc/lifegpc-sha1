import { sha1, hash, HmacSHA1, hashWithHmac } from "./sha1"
const expect = require("expect");
const arrayBufferToHex = require("array-buffer-to-hex");

expect(sha1("")).toBe("da39a3ee5e6b4b0d3255bfef95601890afd80709")
expect(sha1("Firefox vs Chrome")).toBe("c4e2f8af05b799135198dd4d29f37d5245a77631")
expect(sha1("123456789012345678901234567890123456789012345678901234567890")).toBe("245be30091fd392fe191f4bfcec22dcb30a03ae6")
expect(sha1("花澤香菜")).toBe("421145fe4b35eaa6c0cf006afb38fae6d1d2bbae")
expect(sha1("小倉唯")).toBe("701a05ff19e10fb9c4ee279f07970c20f80acd73")
expect(arrayBufferToHex(hash(new Uint8Array([32, 48])).buffer)).toBe("7ae5a5c19b16f9ee3b00ca36fc729536fb5e7307");
expect(HmacSHA1("key", "helloworld")).toBe("078a9e90cb39d3a3efe3497d035362459b197b56")
expect(HmacSHA1("小倉唯", "花澤香菜")).toBe("5ce26eba771df650e39ae6ce06d894167835d774")
expect(arrayBufferToHex(hashWithHmac(new Uint8Array([32, 48]), new Uint8Array([32, 49])).buffer)).toBe("77c07ec3ea84f90a59be99d30687d306ea822a58")
