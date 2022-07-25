import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: ${({theme}) => theme.colors.primary.main};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Loader = styled.ActivityIndicator`
    margin-bottom: 12px;
`

export const Text = styled.Text`
    color: #FFFFFF;
`