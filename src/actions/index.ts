import { ActionsType } from "./../actions-type/index";

type UpdateAction = {
  type: ActionsType.PERSON_MENTO_UPDATE;
  oldName: string;
  newName: string;
};

type AddAction = {
  type: ActionsType.PERSON_MENTO_ADD;
  name: string;
  title: string;
};

type DeleteAction = {
  type: ActionsType.PERSON_MENTO_DELETE;
  name: string;
};

export type Actions = UpdateAction | AddAction | DeleteAction;
