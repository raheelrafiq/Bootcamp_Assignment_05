import React from 'react';

const countReducer = (state, action) => {
    switch (action) {
        case 'Inc':
            return ++state
        case 'Dec':
            return --state
    }
}
 export default countReducer