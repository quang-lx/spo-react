import * as React from 'react';
import * as S from './style'
interface MainLayoutLayoutProps {

}

const MainLayout: React.FunctionComponent<MainLayoutLayoutProps> = (props) => {
    const { children } = props
    return (
        <S.Document>
            <S.Header>Header</S.Header>
            <S.Menu>Menu</S.Menu>
            <S.RightBar>Right Bar</S.RightBar>
            <S.MainContainer>
                {children}
            </S.MainContainer>
        </S.Document>
    );
}

export default MainLayout;