export type ErrorType = {
  response: {
    data: {
      status: number;
      message: string;
      error: {
        auth_error: string;
      };
    };
  };
  message: string;
  request: string;
};

export type NotesType = {
  id: number;
  title: string;
  content: string;
};
