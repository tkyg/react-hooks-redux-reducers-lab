const initialState = { friends: [] };

export function manageFriends(state = initialState, action) {
  // your code here
  switch (action.type) {
      case "friends/add":
        return { friends: [...state.friends, action.payload]}
      case 'friends/remove':
        return { friends: state.friends.filter(friend => friend.id !== action.payload)}
      default:
        return state
  }
}
