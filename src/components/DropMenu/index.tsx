import React, { useEffect, useMemo, useRef } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { Dropdown } from 'antd';

import { DropMenuItem, DropMenuItems, MoreOptions } from './styles';
import { IDropdownProps } from './interfaces';

export const DropMenu: React.FC<IDropdownProps> = ({ items }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = dropdownRef.current;
    if (!ref) return () => ({});

    ref.addEventListener('click', e => e.stopPropagation());

    return () => {
      ref.removeEventListener('click', e => e.stopPropagation());
    };
  }, []);

  const menuItems: ItemType[] = useMemo(
    () =>
      items.map((item, idx) => ({
        key: `${idx}`,
        label: <DropMenuItem>{item.label}</DropMenuItem>,
        disabled: !!item.disabled,
        onClick: e => {
          e.domEvent.stopPropagation();
          item.onClick();
        },
      })),
    [items],
  );

  return (
    <Dropdown overlay={<DropMenuItems items={menuItems} />}>
      <MoreOptions ref={dropdownRef}>
        <FiMoreVertical />
      </MoreOptions>
    </Dropdown>
  );
};
