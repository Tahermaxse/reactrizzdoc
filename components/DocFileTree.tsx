import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";

const DocFileTree = () => {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="4"
        initialExpandedItems={["1", "2", "3", "4"]}
        elements={ELEMENTS}
      >
        <Folder element="root" value="1">
          <Folder element="content" value="2">
            <Folder element="docs" value="3">
              <Folder element="fundamentals" value="4">
                <Folder element="http-server" value="5">
                  <File value="6">
                    <p>index.mdx</p>
                  </File>
                </Folder>
              </Folder>
            </Folder>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
};

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "root",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "content",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "docs",
            children: [
              {
                id: "4",
                isSelectable: true,
                name: "fundamentals",
                children: [
                  {
                    id: "5",
                    isSelectable: true,
                    name: "http-server",
                    children: [
                      {
                        id: "6",
                        isSelectable: true,
                        name: "index.mdx"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default DocFileTree;