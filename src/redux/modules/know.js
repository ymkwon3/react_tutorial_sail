import { db } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

// Actions
const LOADRANK = "know/LOADRANK";

const CREATE = "know/CREATE";
const UPDATE = "know/UPDATE";
const RESET = "know/RESET";

const initialState = {
  is_loaded: false,
  what: "리액트",
  quiz: [
    {
      question: "리액트는 재밌다!",
      answer: "O",
      user_answer: "X",
      completed: false,
    },
    {
      question: "리액트는 어렵다!",
      answer: "O",
      user_answer: "X",
      completed: false,
    },
    {
      question: "리액트는 사랑스럽다!",
      answer: "O",
      user_answer: "X",
      completed: false,
    },
    {
      question: "리액트는 까탈스럽다!",
      answer: "O",
      user_answer: "X",
      completed: false,
    },
    {
      question: "리액트는 응애다!",
      answer: "O",
      user_answer: "X",
      completed: false,
    },
  ],
  who: "Guest",
};

// Action Creators

export function loadRank(rank_list) {
  return { type: LOADRANK, rank_list };
}

export function setUser(name) {
  return { type: CREATE, name };
}

export function updateKnow(index, answer) {
  return { type: UPDATE, index, answer };
}

export function reset() {
  return { type: RESET };
}

// middlewares
export const loadRankFB = () => {
  return async function (dispatch) {
    const data = await getDoc(doc(db, "quiz", "rank"));
    dispatch(loadRank(data.data().rank));
  };
};

export const addRankFB = (name, score, comment) => {
  return async function () {
    await updateDoc(doc(db, "quiz", "rank"), {
      rank: arrayUnion({
        user: name,
        score: score,
        comment: comment,
      }),
    });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "know/LOADRANK": {
      return { ...state, rank: action.rank_list, is_loaded: true };
    }
    case "know/CREATE": {
      state.who = action.name;
      return state;
      // const new_who = action.name;
      // return {what : state.what, quiz : state.quiz, who : new_who};
    }
    case "know/UPDATE": {
      state.quiz[action.index].user_answer = action.answer;
      state.quiz[action.index].completed = true;
      return state;
    }
    case "know/RESET": {
      state.quiz.map((v, i, arr) => (arr[i].completed = false));
      return state;
    }
    default:
      return state;
  }
}
