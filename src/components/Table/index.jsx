import { Fragment, useState, useEffect } from 'react';
import PlusIcon from '../../assets/plus.svg';
import cn from '../../utils/cn';
import CheckIcon from '../../assets/checked.svg';
import CheckBox from '../Checkbox';
import { fetchData } from '../../services';
import Paggination from '../Paggination';

export default function Table() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState();

  const loadData = async (nextPage, filter) => {
    try {
      const { data, page, total } = await fetchData(nextPage, undefined, filter);
      setData(data);
      setPage(page);
      setTotal(total);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      loadData();
    })();
  }, []);

  const loadMore = async (page) => {
    await loadData(page, filter);
  };

  const handleFilter = async (e) => {
    const nextPage = 1;
    const filter = e.target.checked ? { status: 'Deleted' } : undefined;
    setPage(nextPage);
    setFilter(filter);
    await loadData(nextPage, filter);
  };

  return (
    <>
      <div className='mt-[30px] mx-[40px]'>
        <div className='ml-[20px] flex flex-row items-center justify-center'>
          <div className='leading-[41px text-black font-bold text-[34px] font-cormorant-garamond'>
            Users
          </div>
          <CheckBox id='deleted' checked={false} onChange={handleFilter} label='Deleted' />
          <button className='tracking-[.04em] ml-auto flex items-center justify-center uppercase py-[6px] pl-[10px] pr-[20px] leading-[29px] text-white font-bold text-[21px] text-center bg-[#5D5FEF] rounded-[10px]'>
            <img src={PlusIcon} alt='' className='mr-[10px]' />
            add user
          </button>
        </div>

        <div className='relative overflow-x-auto mt-[55px]'>
          <table className='w-full border-collapse border-spacing-0'>
            <thead className='leading-[22px] font-normal text-[16px] text-left text-black uppercase'>
              <tr>
                <th scope='col' className='pb-[20px] pl-[20px] font-normal'>
                  Firs Name
                </th>
                <th scope='col' className='pb-[20px] font-normal'>
                  Last Name
                </th>
                <th scope='col' className='pb-[20px] font-normal'>
                  Email
                </th>
                <th scope='col' className='pb-[20px] pr-[40px] text-right font-normal'>
                  Role
                </th>
                <th scope='col' className='pb-[20px] font-normal'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className='font-barlow-semi-condensed'>
              {!!data.length &&
                data.map((item, idx) => (
                  <Fragment key={idx}>
                    <tr
                      className={cn(
                        'bg-white/40 rounded-[10px] leading-[29px] text-left text-[21px] font-normal',
                        { 'text-[#A6A6A6]': item.status === 'Deleted' },
                        { 'shadow-light': item.status !== 'Deleted' }
                      )}
                    >
                      <td className='pl-[20px] py-[10px] w-[120px] border border-none rounded-tl-[10px] rounded-bl-[10px] overflow-hidden'>
                        {item.first_name}
                      </td>
                      <td className='py-[10px] w-[120px]'>{item.last_name}</td>
                      <td className='py-[10px] w-[740px]'>{item.email}</td>
                      <td
                        className={cn('py-[10px] pr-[40px] w-[170px] min-w-[165px] text-right', {
                          'text-[#A6A6A6]': item.role === 'Consultant',
                        })}
                      >
                        {item.role}
                      </td>
                      <td
                        className={cn(
                          'py-[10px] w-[160px] min-w-[140px] border border-none rounded-tr-[10px] rounded-br-[10px]',
                          { 'text-[#D77842]': item.status === 'Deleted' }
                        )}
                      >
                        <div className='flex items-center'>
                          {item.status === 'Registered' && <img src={CheckIcon} alt='' />}
                          <span className='ml-[10px]'>{item.status}</span>
                        </div>
                      </td>
                    </tr>
                    <tr className='h-[10px]'></tr>
                  </Fragment>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {!!data.length && <Paggination onChange={loadMore} page={page} total={total} />}
    </>
  );
}
