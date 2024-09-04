import MenuButton from '@/app/components/common/MenuButton';

const SettingsOption: React.FC = (): JSX.Element => {
  return (
    <MenuButton
      label="settings"
      Icon={<span className="material-symbols-outlined">settings</span>}
    />
  );
};

export default SettingsOption;
