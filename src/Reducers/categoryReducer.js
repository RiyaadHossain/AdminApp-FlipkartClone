import { categoryContants } from "../Actions/constants";

const initialState = { categories: [], loading: false, error: null };

const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    if (parentId === undefined) {
        return [...categories, {
            _id: category._id,
            name: category.name,
            slug: category.slug,
            children: []
        }];
    }

    for (let cat of categories) {

        if (cat._id === parentId) {
            /* const newCategory = {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                parentId: category.parentId,
                children: []
            }; */
            myCategories.push({
                ...cat,
                children: cat.children.length ?
                    buildNewCategories(parentId, [...cat.children,
                    { _id: category._id, name: category.name, slug: category.slug, parentId: category.parentId, children: category.children }], category)
                    : []
            })
        } else {
            myCategories.push({
                ...cat, children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            });
        }

    }
    return myCategories
}

const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case categoryContants.GETALLCATE_REQUEST:
            state = { ...state, loading: true }
            break;

        case categoryContants.GETALLCATE_SUCCESS:
            state = { ...state, loading: false, categories: action.payload.message }
            break;

        case categoryContants.GETALLCATE_FAIL:
            state = { ...state, loading: false, error: action.payload.error }
            break;

        case categoryContants.ADDCATE_REQUEST:
            state = { ...state, loading: true }
            break;

        case categoryContants.ADDCATE_SUCCESS:
            const category = action.payload.category;
            console.log(category)
            const updatedCategories = buildNewCategories(category.parentId, state.categories, category);

            state = { ...state, loading: false, categories: updatedCategories }
            break;

        case categoryContants.ADDCATE_FAIL:
            state = { ...state, loading: false, error: action.payload.error }
            break;
        
        case categoryContants.UPDATE_CATE_REQUEST:
            state = { ...state, loading: true }
            break;
        
        case categoryContants.UPDATE_CATE_SUCCESS:
            state = { ...state, loading: false }
            break;

        default:
            break;
    }
    return state
}

export default categoryReducer