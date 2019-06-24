import {CREATE_SORUCE, UPDATE_SOURCE, DELETE_SOURCE} from './actions'

const rootReducer = (sources=[], action) => {
    switch (action.type) {
        case CREATE_SORUCE: {
            const new_source = {
                publication_name: "Publication",
                title: "Title",
                date: new Date(),
                url: "http://example.com"
            };
            return [
                ...sources,
                new_source
            ]
        }
        case UPDATE_SOURCE: {
            const oldSource = sources[action.index];
            let source = {
                ...oldSource
            };

            source[action.name] = action.value;
            let newSources = [
                ...sources
            ];
            newSources[action.index] = source;
            return newSources;
        }
        case DELETE_SOURCE: {
            return sources.filter((element, index) => (index !== action.index))
        }
        default: {
            return sources
        }

    }
};

export default rootReducer;