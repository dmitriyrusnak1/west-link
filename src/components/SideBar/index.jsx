import ChartIcon from '../../assets/chart.png';
import PathIcon from '../../assets/path.svg';
import DocumentsIcon from '../../assets/documents.svg';
import PeopleIcon from '../../assets/people.svg';
import SettingsIcon from '../../assets/settings.svg';
import UserIcon from '../../assets/user.svg';

const navIcons = [PathIcon, DocumentsIcon, PeopleIcon, ChartIcon, UserIcon];

export default function SideBar() {
  return (
    <div className='flex flex-col items-center h-full w-full bg-[#a0a9f1] px-[10px] pt-[100px]'>
      {navIcons.map((icon, idx) => (
        <div key={idx}>
          <img src={icon} />
        </div>
      ))}

      <div className='mt-auto mb-30'>
        <img src={SettingsIcon} />
      </div>
    </div>
  );
}
