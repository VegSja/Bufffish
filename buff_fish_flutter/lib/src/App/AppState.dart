
import 'package:buff_fish_flutter/src/auth/LoginState.dart';

class AppState {
  final LoginState? login;
  AppState({this.login,});

  factory AppState.initial() => AppState(login: LoginState.initial());

  AppState copyWith({LoginState? login,}) {
    return AppState(
      login:login ?? this.login, );
  }
}
