// 更复杂的树形结构示例
const tree = {
  funcid: 1,
  name: "root",
  children: [
    {
      funcid: 2,
      name: "child1",
      children: [
        {
          funcid: 4,
          name: "child1.1",
          children: [
            {
              funcid: 7,
              name: "child1.1.1",
            },
            {
              funcid: 8,
              name: "child1.1.2",
              children: [
                {
                  funcid: 11,
                  name: "child1.1.2.1",
                },
                {
                  funcid: 12,
                  name: "child1.1.2.2",
                },
              ],
            },
          ],
        },
        {
          funcid: 5,
          name: "child1.2",
          children: [
            {
              funcid: 9,
              name: "child1.2.1",
              children: [
                {
                  funcid: 13,
                  name: "child1.2.1.1",
                },
                {
                  funcid: 17,
                  name: "child1.2.1.2",
                },
              ],
            },
            {
              funcid: 14,
              name: "child1.2.2",
            },
          ],
        },
      ],
    },
    {
      funcid: 3,
      name: "child2",
      children: [
        {
          funcid: 6,
          name: "child2.1",
          children: [
            {
              funcid: 10,
              name: "child2.1.1",
              children: [
                {
                  funcid: 15,
                  name: "child2.1.1.1",
                },
                {
                  funcid: 16,
                  name: "child2.1.1.2",
                },
              ],
            },
          ],
        },
        {
          funcid: 18,
          name: "child2.2",
          children: [
            {
              funcid: 19,
              name: "child2.2.1",
              children: [
                {
                  funcid: 20,
                  name: "child2.2.1.1",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// 查找目标节点及其路径的函数
function pruneTree(tree, targetIds) {
  function findAndPrune(node) {
    if (targetIds.includes(node.funcid)) {
      return { ...node };
    }

    if (node.children) {
      const prunedChildren = node.children
        .map(findAndPrune)
        .filter((child) => child !== null);

      if (prunedChildren.length > 0) {
        return { ...node, children: prunedChildren };
      }
    }

    return null;
  }

  return findAndPrune(tree);
}

// 示例调用
const targetIds = [11, 16, 17, 20, 99]; // 包含树中不存在的节点 funcid 99
const prunedTree = pruneTree(tree, targetIds);
console.log(JSON.stringify(prunedTree, null, 2));
