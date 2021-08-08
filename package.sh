mkdir package
cp -v LICENSE package.json README.md tsconfig.json sha1.ts package/
cd package
mkdir lib
cd ..
cp -v lib/sha1.js lib/sha1.d.ts lib/sha1.js.map package/lib
tar -czvf release.tar.gz package/*
