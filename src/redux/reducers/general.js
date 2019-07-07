

export const initialState = {
  results: [],
  detail: null,
  meta: {
    total: 0,
    per_page: 0,
    current_page: 0,
    count: 0,
    links: {}
  },
  createPending: false,
  findPending: false,
  findIdPending: false,
  updatePending: false,
  deletePending: false,
  loadMorePending: false,
  isError: null,
  isFinished: false
};

export default (service) => {
  const serviceReducer = {
    [service]: (state = initialState, action) => {
      switch (action.type) {

        case `FIND_${service}_PENDING`:
          return { ...state, findPending: true, isFinished: false, isError: false };
        case `FIND_${service}_FULFILLED`: {
          return {
            ...state,
            findPending: false,
            results: action.payload.data.data || action.payload.data.results,
            isFinished: true
          };
        }
        case `FIND_${service}_REJECTED`:
          return { ...state, findPending: false, isFinished: false, isError: true };

        case `LOADMORE_${service}_PENDING`:
          return { ...state, loadMorePending: true, isFinished: false, isError: false };
        case `LOADMORE_${service}_FULFILLED`: {
          const results = [
            ...state.results,
            ...action.payload.data.results
          ]
          return {
            ...state,
            loadMorePending: false,
            results,
            meta: {
              ...action.payload.data.meta,
              count: state.meta.count + action.payload.data.meta.count
            },
            isFinished: true
          };
        }
        case `LOADMORE_${service}_REJECTED`:
          return { ...state, loadMorePending: false, isFinished: false, isError: true };

        case `CREATE_${service}_PENDING`:
          return { ...state, createPending: true, isFinished: false, isError: false };
        case `CREATE_${service}_FULFILLED`:
          state.results.push(action.payload.data.data);
          state.meta.total += 1;
          return { ...state, createPending: false, isFinished: true };
        case `CREATE_${service}_REJECTED`:
          return { ...state, createPending: false, isError: true };

        case `FIND_ID_${service}_PENDING`:
          return { ...state, findIdPending: true, isFinished: false, isError: false };
        case `FIND_ID_${service}_FULFILLED`:
          return {
            ...state,
            findIdPending: false,
            isFinished: true,
            isError: false,
            detail: action.payload.data && action.payload.data.data
          };
        case `FIND_ID_${service}_REJECTED`:
          return { ...state, findIdPending: false, isError: true };

        case `UPDATE_${service}_PENDING`:
          return { ...state, patchPending: true, isFinished: false, isError: false };
        case `UPDATE_${service}_FULFILLED`: 
          if (Array.isArray(state.results)) {
            const newResultsAfterUpdate = state.results.map(result => {
              if ((result.id && result.id === action.payload.data.data.id) || (result.key && result.key === action.payload.data.data.key)) {
                return action.payload.data.data;
              }
              return result;
            })
            return {
              ...state, patchPending: false, isFinished: true,
              results: newResultsAfterUpdate
            };
          }
          return {
            ...state,
            patchPending: false,
            isFinished: true
          }
        

        case `DELETE_${service}_PENDING`:
          return { ...state, deletePending: true, isFinished: false, isError: false };
        case `DELETE_${service}_FULFILLED`: {
          const arrayUrl = action.payload.config.url.split('/');
          const id = arrayUrl[arrayUrl.length - 1];
          const newResultsAfterDelete = state.results.filter(result => {
            return Number(result.id) !== Number(id)
          });

          const oldTotalData = state.meta.total;
          return {
            ...state, deletePending: false, isFinished: true,
            results: newResultsAfterDelete,
            meta: {
              total: oldTotalData - 1
            }
          };
        }
        case `DELETE_${service}_REJECTED`:
          return { ...state, deletePending: false, isError: true };

        case `FILTER_${service}_PENDING`:
          return { ...state, findPending: true, isFinished: false, isError: false };
        case `FILTER_${service}_FULFILLED`: {
          return {
            ...state,
            findPending: false,
            results: action.payload.data.data,
            isFinished: true
          };
        }
        case `FILTER_${service}_REJECTED`:
          return { ...state, findPending: false, isFinished: false, isError: true };

        default:
          return state;
      }
    }
  }
  return serviceReducer[service]
}