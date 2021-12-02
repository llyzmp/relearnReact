# Redux

## Redux核心概念及工作流程
<img src="../assets/imgs/redux.png">

- Store: 存储状态的容器，JavaScript对象
- View: 视图，HTML页面
- Actions: 对象，描述对状态进行怎样的操作
- Reducers: 函数，操作状态并返回新的状态

## Redux核心API
```js
// 创建Store状态容器
const store = Redux.createStore(reducer);
// 创建用于处理状态的reducer函数
function reducer(state = initialState, action) {}
// 获取状态
store.getState();
// 订阅状态
store.subscribe(function(){});
// 触发Action
store.dispatch({type: 'description...'});

```