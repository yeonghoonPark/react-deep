import { Actions } from "./../actions/index";
import { ActionsType } from "../actions-type";
import { Person } from "../models/persons";

export const personReducer = (person: Person, action: Actions) => {
  switch (action.type) {
    case ActionsType.PERSON_MENTO_UPDATE: {
      const { oldName, newName } = action;
      return {
        ...person,
        mentors: person.mentors.map((cV) => {
          if (cV.name === oldName) {
            cV.name = newName as string;
            return cV;
          }
          return cV;
        }),
      };
    }

    case ActionsType.PERSON_MENTO_ADD: {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }

    case ActionsType.PERSON_MENTO_DELETE: {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((cV) => cV.name !== name),
      };
    }

    default: {
      throw Error(`해당되지 않는 액션 타입입니다: ${action}`);
    }
  }
};
