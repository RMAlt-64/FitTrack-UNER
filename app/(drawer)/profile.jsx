import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e8f5e9;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #2e7d32;
`;

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #388e3c;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export default function ProfileScreen() {
  return (
    <Container>
      <Title>👤 Perfil del Usuario</Title>
      <Button>
        <ButtonText>Editar perfil</ButtonText>
      </Button>
    </Container>
  );
}
