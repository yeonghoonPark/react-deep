export type Mento = {
  name: string;
  title: string;
};

export type Person = {
  name: string;
  title: string;
  mentors: Mento[];
};
