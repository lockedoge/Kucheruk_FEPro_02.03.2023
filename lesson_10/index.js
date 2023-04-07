// DZ 11.

// 1)

function solution(arr) {
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const result = [];
  for (const [num, count] of Object.entries(counts)) {
    if (count % 2 === 1) {
      result.push(parseInt(num));
    }
  }
  return result;
}

const arr1 = [12, 23, 34, 12, 12, 23, 12, 45];
const arr2 = [4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100];
const arr3 = [3, 3, 4, 6, 4, 5, 9, 9, 21, 9];
const arr4 = [4, 8, 15, 16, 23, 42, 4, 15, 42, 42];
const arr5 = [2, 2, 44, 44];

console.log(
  solution(arr1),
  solution(arr2),
  solution(arr3),
  solution(arr4),
  solution(arr5)
);

// 2)

function ezjQuery(tag) {
  let elements = [document.createElement(tag)];

  return {
    add: function (tag, content) {
      let element = document.createElement(tag);
      let parent = elements[elements.length - 1];
      parent.appendChild(element);
      elements.push(element);

      if (content) {
        element.innerHTML = content;
      }

      return this;
    },

    render: function () {
      let html = elements[0].outerHTML;
      elements = [document.createElement(tag)];
      return html;
    },
  };
}

var helloList = ezjQuery("body") // <body></body>
  .add("div") // <body><div></div></body>

  .add("ul") // <body><div><ul></ul></div></body>

  .add("li", "Hello") //<body><div><ul><li>Hello</li></ul></div></body>

  .render();

console.log(helloList);

var bodyDiv = ezjQuery("body") //<body></body>
  .add("div") //<body><div></div></body>

  .render();

console.log(bodyDiv); //<body><div></div></body>
