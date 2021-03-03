type CreateToDo = {
    title: string;
    summary: string;
};

type CreateToDosType = {
    [createToDo: CreateToDo]: CreateToDo[];
};
