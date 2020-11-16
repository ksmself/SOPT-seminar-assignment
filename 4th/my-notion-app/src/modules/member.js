/*
    action은 상태 변화, 조회 등이 필요할 때 발생시킨다. 
*/

// action type 설정
const SET_MEMBERS = "member/SET_MEMBERS";

/*
    Action Creator, 액션 생성함수는 액션을 만드는 함수로, 파라미터를 받아와서
    액션 객체 형태로 만들어주는 역할을 한다. 
*/

// action 생성 함수
export const setMembersToStore = (members) => ({
  type: SET_MEMBERS,
  members,
});

// 초깃값 설정
const initialState = {
  members: [],
};

/*
    Reducer는 state와 action을 파라미터로 받아와서 변화를 일으키는 함수 
*/

// reducer 함수 정의 - export default
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MEMBERS:
      console.log("a :", action);
      return {
        ...state,
        members: action.members,
      };
    default:
      // 지원하지 않는 action은 상태 유지
      return state;
  }
}
