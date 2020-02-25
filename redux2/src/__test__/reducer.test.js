import reducer from '../reducers';

describe('Reducer testing',() => {
    it('Should return initial state',() => {
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(JSON.stringify({
            articles:{},
            gallery:{}
        }))
    })

    it('reducerr test for action',() => {
        let state={
            articles:[],
            gallery:[]
        }

        state= reducer(state,{action:'GET_LATEST'});

        expect(state).toEqual({
            articles:[],
            gallerys:[]
        })
    })
})