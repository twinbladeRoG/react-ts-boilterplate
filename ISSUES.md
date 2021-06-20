# ISSUES

All issues faced during development of the project should be documented here. Also if any workaround used to solve it.

Purpose of this document is to keep track of the various issues of libraries and packages used in the project which does not have a proper fix from the actually package maintainers, which might get fixed in some future release.


## 2021-06-20
### **babel-loader** version mismatch between **create-react-app** and **storybook**

*Cause:* Storybook requires babel-loader **v8.2.2** but React requires **v8.1.0**

*Solution:* Current resolution is to use yarn resolution to downgrade *babel-loader* to **v8.1.0**

Storybook Repo Issue: https://github.com/storybookjs/storybook/issues/5183
React Repo Issue: https://github.com/facebook/create-react-app/issues/10123

---

### Storybook server start fails due error in **react-docgen-typescript**

*Error:*
```
node_modules/react-docgen-typescript/lib/parser.js:475
var trimmedText = (tag.text || '').trim();
```

*Cause:* Due to mismatch in TypeScript and TS type JSDocGen

*Solution:* Current solution is to disable **react-docgen-typescript** in storybook config in `./storybook/main.js`

OR

Change Typescript version to `v4.2.2`

Storybook Repo Issue: https://github.com/storybookjs/storybook/issues/10790
React Docgen Typescript Repo Issue: https://github.com/styleguidist/react-docgen-typescript/issues/356
