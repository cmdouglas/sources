export const CREATE_SORUCE = 'CREATE_SOURCE';
export const createSource = () => {
    return {
        type: CREATE_SORUCE
    }
};

export const UPDATE_SOURCE = 'UPDATE_SOURCE';
export const updateSource = (index, name, value) => {
    return {
        type: UPDATE_SOURCE,
        index: index,
        name: name,
        value: value
    }
};

export const DELETE_SOURCE = 'DELETE_SOURCE';
export const deleteSource = (index) => {
    return {
        type: DELETE_SOURCE,
        index: index,
    }
};