import {createStore} from 'easy-peasy'

const store = createStore({})

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {

    }
}  

export default store