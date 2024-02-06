import data from '../mock/data';

export const fetchData = async (page = 1, limit = 4) => {
  return new Promise((res) => {
    setTimeout(
      () =>
        res({
          page,
          data: data.slice((page - 1) * limit, page * limit),
          total: Math.ceil(data.length / limit),
        }),
      500
    );
  });
};
