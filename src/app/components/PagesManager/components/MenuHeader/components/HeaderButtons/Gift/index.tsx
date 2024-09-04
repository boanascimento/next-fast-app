import MenuButton from '@/app/components/common/MenuButton';

const Gift: React.FC = (): JSX.Element => {
  return (
    <MenuButton
      label="featured seasonal and gifts"
      Icon={
        <span className="material-symbols-outlined">
          featured_seasonal_and_gifts
        </span>
      }
    />
  );
};

export default Gift;
