import data from '../mock/data';

export const fetchData = async (page = 1, limit = 4, filter = undefined) => {
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
