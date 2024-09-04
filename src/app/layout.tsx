import ExternalReferences from './externalReferences';
import * as S from './styles';

export const metadata = {
  title: 'Next Fast APP',
  description: 'Developed by Boanerges Souza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <S.HTML lang="en">
      <ExternalReferences />
      <S.Body>{children}</S.Body>
    </S.HTML>
  );
}
