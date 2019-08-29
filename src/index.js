import "./styles.css";
import $ from "jquery";

const user_id = 706;

let list_items = [
  {
    name: "Janson",
    user_id: 706,
    login_status: 1
  },
  {
    name: "Rose",
    user_id: 600,
    login_status: 1
  },
  {
    name: "Alex",
    user_id: 693,
    login_status: -1
  },
  {
    name: "Starboy",
    user_id: 702,
    login_status: -2
  },
  {
    name: "Pankaj",
    user_id: 692,
    login_status: -2
  }
];

function updateList() {
  document.querySelector("#lists").innerHTML = "";
  console.log("hey fill time");
  let all_list = "";
  let top = 0,
    pos = 0;

  list_items.forEach(function(list) {
    all_list += `<li data-pos="${pos}" style="top: ${top}px"> ${
      list.name
    } </li>`;
    top = top + 30;
    pos++;
  });

  document.querySelector("#lists").innerHTML = all_list;
}

updateList();

function getIndex(array, id) {
  let index = "";

  for (let i = 0; i < array.length; i++) {
    if (id === array[i].user_id) {
      index = i;
      break;
    }
  }

  return index;
}

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

// console.log(getIndex(692));

let newarr = array_move(list_items, getIndex(list_items, 692), 1);

// updateList();

setTimeout(() => {
  let pos = getIndex(list_items, 702);
  let el = $("[data-pos='" + pos + "']")[0];
  let a = $("[data-pos='1']")[0];

  let m = pos * 30;

  console.log(el);

  a.style = "top: 120px";
  el.style = "top: 30px";

  console.log(newarr);
}, 5000);

// newarr = [];

// newarr = array_move(list_items, getIndex(list_items, 702), 1);

// setTimeout(() => {
//   updateList();

//   console.log(newarr);
// }, 20000);

// newarr = [];

// newarr = array_move(list_items, getIndex(list_items, 600), 1);

// setTimeout(() => {
//   updateList();

//   console.log(newarr);
// }, 30000);
