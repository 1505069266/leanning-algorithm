function ArrayList() {
  let array = [];

  this.insert = function (element) {
    array.push(element);
  };

  this.toString = function () {
    return array.join();
  };

  //最基本的冒泡排序
  this.bubbleSort = function () {
    let length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          let aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
  };

  //改善之后的冒泡排序
  this.modifiedBubbleSort = function () {
    let length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          let a = array[j];
          array[j] = array[j + 1];
          array[j + 1] = a;
        }
      }
    }
  };

  //选择排序
  this.selectionSort = function () {
    let length = array.length,
      indexMin;
    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

  let swap = function (index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  //插入排序
  this.insertionSort = function () {
    let length = array.length,
      j,
      temp;
    for (let i = 1; i < length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };




  

  var mergeSortRec = function (array) {
    var length = array.length;
    if (length === 1) {
      return array;
    }
    var mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  };
  // //归并排序
  this.mergeSort = function () {
    array = mergeSortRec(array);
  };

  var merge = function (left, right) {
    var result = [],
      il = 0,
      ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }
    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
  };




  //快速排序
  this.quickSort = function () {
    quick(array, 0, array.length - 1);
  };
  var quick = function (array, left, right) {
    var index; //{1}
    if (array.length > 1) {
      //{2}
      index = partition(array, left, right); //{3}
      if (left < index - 1) {
        //{4}
        quick(array, left, index - 1); //{5}
      }
      if (index < right) {
        //{6}
        quick(array, index, right); //{7}
      }
    }
  };

  var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)], //{8}
      i = left, //{9}
      j = right; //{10}
    while (i <= j) {
      //{11}
      while (array[i] < pivot) {
        //{12}
        i++;
      }
      while (array[j] > pivot) {
        //{13}
        j--;
      }
      if (i <= j) {
        //{14}
        swapQuickStort(array, i, j); //{15}
        i++;
        j--;
      }
    }
    return i; //{16}
  };

  var swapQuickStort = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  //二分搜索
  this.binarySearch = function (item) {
    this.quickSort(); //{1}
    var low = 0, //{2}
      high = array.length - 1, //{3}
      mid,
      element;
    while (low <= high) {
      //{4}
      mid = Math.floor((low + high) / 2); //{5}
      element = array[mid]; //{6}
      if (element < item) {
        //{7}
        low = mid + 1; //{8}
      } else if (element > item) {
        //{9}
        high = mid - 1; //{10}
      } else {
        return mid; //{11}
      }
    }
    return -1; //{12}
  };
}

let arr = new ArrayList();

arr.insert(51);
arr.insert(4);
arr.insert(65);
arr.insert(65);
arr.insert(6);
arr.insert(552);
arr.insert(5);
arr.insert(22);
arr.insert(35);
arr.insert(1);

arr.quickSort();

console.log(arr.toString());