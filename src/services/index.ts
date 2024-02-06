import data, { UserItem } from '../mock/data';
import { TFilter } from '../common/types';

type FetchDataResult = {
  page: number;
  data: UserItem[];
  total: number;
};

type FetchFunction = (
  page?: number,
  limit?: number,
  filter?: TFilter
) => Promise<FetchDataResult>;

export const fetchData:FetchFunction = async (
  page = 1,
  limit = 4,
  filter,
) => {
  return new Promise((res) => {
    setTimeout(() => {
      const result = filter ? data : data.filter((item) => item.status !== 'Deleted');
      const chunk = result.slice((page - 1) * limit, page * limit);
      return res({
        page,
        data: chunk,
        total: Math.ceil(result.length / limit),
      });
    }, 500);
  });
};
