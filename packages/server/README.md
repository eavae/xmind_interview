## Get started

1. Install dependencies via `npm i`.
2. Run tests to make sure everything is fine, using `npm run test:all`.
3. Now, you can start the dev server, `npm run start`.
4. Check the output from step 3, if there are any red things, [contact me](mailto:lijingyu68@gmail.com).
5. Go to [GraphQL Playground](http://localhost:3000/graphql), to explore GraphQL server or start the client.

## 待办事项

以下特性需要持续改进。

- [ ] E2E 测试应引入 fixture 和 snapshot 概念。通过创建需要的 GraphQL 输入的 fixture，并自动执行测试，测试完后对比 snapshot，以便减少模版代码。
- [ ] 应加入 git commit hooks 和 push hooks，并执行 prettier、测试和构建。
