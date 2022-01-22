export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    // token : 'BQA0xW0FlevxbHgNe4K4s34ydXLBp0PY840Kon8fgB0shXN-YqFgkQxpJ05rwYn4L_WRONhtlVWVqarr6GXfXjQf1zQtRrS54KxzO1KknL3rH7PfNohtccIhNBC6KGLiaJlxD2wHsuHqK-mpekFX5uxXJdla5BZ0abvyrHWp5ir195KXO818'
};

const reducer = (state,action) =>{
    console.log(action)

    switch(action.type){

        case 'SET_USER':
            return{
                ...state,
                user : action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists : action.playlists
            }
        // case 'SET_DISCOVER_WEEKLY':
        //     return{
        //         ...state,
        //         discover_weekly : action.discover_weekly
        //     }
        default:
            return state;
    }
}

export default reducer;