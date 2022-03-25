// Actions
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

const initialState = {
  list: ["밥먹기", "게임하기", "개발하기"],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function deleteBucket(index) {
  return { type: DELETE, index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((v, i) => i !== +action.index);
      console.log(new_bucket_list, action.index);
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
