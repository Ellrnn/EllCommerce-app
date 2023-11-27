import { useSafeAreaInsets } from "react-native-safe-area-context";
import S from "./styles";

export function Footer() {
  const insets = useSafeAreaInsets();
  return (
    <S.Footer>
      <S.Text style={{ marginBottom: insets.bottom }}>
        ELL Commerce © Todos os direitos reservados
      </S.Text>
    </S.Footer>
  );
}
