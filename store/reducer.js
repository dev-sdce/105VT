export const CHANGE_LANGUANGE = "APP/CHANGE_LANGUANGE";

export const initialState = {
  isLanguageEnglish: true,
};

export const changeLanguage = () => ({
  type: CHANGE_LANGUANGE,
});

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUANGE:
      return {
        ...state,
        isLanguageEnglish: !state.isLanguageEnglish,
      };
  }
};
