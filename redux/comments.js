import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const array2 = [];
            const comment = action.payload;
            const id = state.comments.length;
            comment.id = id;
            array2.push(comment);
            const newComment = state.comments.concat(array2)
            return  {...state, comments: newComment}
        default:
            return state;
    }
};