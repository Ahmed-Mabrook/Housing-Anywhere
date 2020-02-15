import React from 'react';
import style from './profile-tabs.module.scss';

interface IProfileTabsComponentProps {
  tabs: string[];
  onTabSelected: (tab: number) => void;
}
export const ProfileTabsComponent = (props: IProfileTabsComponentProps) => {
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  const handleClick = (tab: number) => {
    setCurrentTab(tab);
    props.onTabSelected(tab);
  };
  
  return (
    <div className={style['profile-tabs']}>
      <ul>
        {props.tabs.map((tab: string, key: number) => (
          <li
            className={style[currentTab === key ? 'profile-tabs-active' : '']}
            onClick={() => handleClick(key)}
            key={key}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};
