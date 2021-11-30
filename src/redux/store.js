import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunkMiddleware))
);




//    Mидлвар (middleware) - это предлагаемый способ расширения Redux с помощью настраиваемых функций. 
//    Mидлвар позволяет вам обернуть метод стора dispatch для пользы и дела. Ключевой особенностью мидлвара является то, что они компонуемы. 
//    Несколько мидлваров можно объединить вместе, где каждый мидлвар не должен знать, что происходит до или после него в цепочке.

//    Наиболее распространенным случаем использования мидлваров является поддержка асинхронных экшенов без большого количества шаблонного кода или зависимости от библиотек типа Rx.
//    Это позволяет вам вызывать асинхронные экшены помимо обычных экшенов.  
