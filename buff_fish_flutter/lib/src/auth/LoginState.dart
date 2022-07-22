class LoginState {
  bool? loading;
  dynamic error;
  String? userId;

  LoginState({
      this.loading,
      this.error,
      this.userId
  });

  factory LoginState.initial() => LoginState(
    loading: false,
    error: null,
    userId: null
  );
}
