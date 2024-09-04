import MenuButton from '@/app/components/common/MenuButton';

const Comments: React.FC = (): JSX.Element => {
  return (
    <MenuButton
      label="chat"
      Icon={<span className="material-symbols-outlined">chat</span>}
    />
  );
};

export default Comments;
