function createStore(reducer){
    const store = {
        state:reducer({},{}),
        listeners: [],
        getState(){
            return this.state;
        },
        dispatch(action){
            //调用reducer,reducer中根据action改写state并返回
            this.state = reducer(this.state,action);
            for(let listener of this.listeners){
                listener();
            }
        },
        /**订阅state变化的函数*/
        subscribe(listener){
            this.listeners.push(listener);
        }
    }
    //如要支持中间件，则需要改写store.dispatch方法
    const next = store.dispatch;
    store.dispatch = function(action){
        console.log(action);
        next(action);
    }
    return store;
}
function createMiddleware(){
    /**
     *  next表示后续的中间件
    */
    return function(next){
        /**
         * 当前中间件具体的处理逻辑
        */
        return function(action){
            
        }
    }
}

const logMiddleware = createMiddleware();

const reducer = (state,action)=>{
    if(action.type === 'edit'){
        return {...state,...action.payload}
    }
    return state;
}