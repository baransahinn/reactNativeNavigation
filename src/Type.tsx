export  type RootStackParamList = {
  WelcomeScreen: undefined;
  MemberSignScreen: undefined;
  MemberScreen: {user: MemberResultProps};
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
export type MemberResultProps = {
  userName: string;
  userSurname: string;
  userAge: string;
  userEmail: string;
  userCity: string;
}
