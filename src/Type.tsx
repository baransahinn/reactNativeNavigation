export  type RootStackParamList = {
  WelcomeScreen: undefined;
  MemberSignScreen: undefined;
};

export type ButtonProps = {
  text: string;
  onPress: () => void;
}
export type InputProps = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}