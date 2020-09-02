
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle:{
    alignItems:'center',
    paddingLeft: 16
  }

}))`
  
  background:#1e222b;
height:120px;

`

export const  Option = styled.TouchableOpacity`
  width: 80px;
  margin-right:14px;
  align-items:center;

`;
export const  Img = styled.Image``;
export const  Label = styled.Text`
  
color:#fff;
margin-top:4px;
font-size: 14px;
font-weight:bold;

`;
