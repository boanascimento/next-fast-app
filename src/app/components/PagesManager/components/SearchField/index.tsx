import React from 'react';
import * as S from './styles';

interface ISearchFieldProps {
  testID?: string;
}

const SearchField: React.FC<ISearchFieldProps> = ({
  testID = 'SearchField',
}): JSX.Element => {
  return (
    <S.Container data-testid={`${testID}_Container`}>
      <S.SearchFieldIcon
        testID={`${testID}_SearchFieldIcon`}
        label="search button"
        Icon={<span className="material-symbols-outlined">search</span>}
      />

      <S.SearchFieldInput
        data-testid={`${testID}_SearchFieldInput`}
        id={`${testID}_SearchFieldIcon`}
        name={`${testID}_SearchFieldIcon`}
        placeholder="Search"
      />
    </S.Container>
  );
};

export default SearchField;
