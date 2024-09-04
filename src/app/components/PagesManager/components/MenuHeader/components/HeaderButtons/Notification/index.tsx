import MenuButton from '@/app/components/common/MenuButton';

const Notification: React.FC = (): JSX.Element => {
  return (
    <MenuButton
      label="notifications"
      Icon={<span className="material-symbols-outlined">notifications</span>}
    />
  );
};

export default Notification;
