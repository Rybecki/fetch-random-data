export interface Response {
  data: [] | string[];
  isLoading: boolean;
}

export interface HeadersTypes {
  header: string;
  i: number;
}

export interface ButtonChangerProps {
  loading: boolean;
  error: boolean;
}

export interface UsersProps {
  gender: string | string[];
  picture: {
    thumbnail: string | string[];
  };
  name: {
    first: string;
    last: string;
  };
  city: string;
  data: [];
}

export interface DataTypes {
  filteredResults?: Array<{}>;
}
