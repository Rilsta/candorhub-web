const initialState = {
  imageForCritique: {
    title: '',
    description: '',
    image: {
      image: ''
    },
    questions: []
  }
}

function setImageToCritique(state, responseJSON) {
  if (responseJSON.images) {
    //handle getting an image from an array
    return { ...state, imageForCritique: responseJSON.images[0]};
  } else if (responseJSON.image) {
    //handle getting a specific image
    return { ...state, imageForCritique: responseJSON.image};
  }
}

export default function imageForCritique(state = initialState, action) {
  switch(action.type) {
    case 'SET_IMAGE_TO_CRITIQUE':
      return setImageToCritique(state, action.responseJSON);
    default:
      return state;
  }
}