class OrderedList {
    constructor() {
      this.list = [];
    }
  
    add(value) {
      // 使用二分法找到新值應插入的位置
      let left = 0;
      let right = this.list.length;
  
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
  
        if (this.list[mid] < value) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
  
      this.list.splice(left, 0, value); // 在計算出的適當位置插入新值
    }
  
    getList() {
      return this.list;
    }
  }
  
  // 使用例子
  const orderedList = new OrderedList();
  orderedList.add(5);
  orderedList.add(2);
  orderedList.add(8);
  orderedList.add(1);
  orderedList.add(3);
  
  console.log(orderedList.getList()); // 輸出: [1, 2, 3, 5, 8]