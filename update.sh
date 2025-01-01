#!/bin/bash
echo -e "\033[0;32mDeploying updates to api.guole.fun...\033[0m"

cd d:/src/api-vercel

# rm -r public/package.json
# cp node_modules/guole.fun.api/package.json public

git add .
msg="🏖️ API更新于 `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push github main

#./deplay.bat

# push执行完成，不自动退出
exec /bin/bash