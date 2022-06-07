import 'dart:async';

import 'package:buff_fish_flutter/src/design/Theme.dart';
import 'package:buff_fish_flutter/src/pages/HomePage.dart';
import 'package:buff_fish_flutter/src/pages/WorkoutPage.dart';
import 'package:flutter/material.dart';

//Local imports
import 'package:buff_fish_flutter/src/features/stats/DayRangePicker/DayRangePicker.dart';
import 'package:flutter/services.dart';
import 'package:uni_links/uni_links.dart';

bool _initialUriIsHandled = false;
void main() => runApp(const App());

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  static const String _title = 'BuffFish';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: RoutingWidget(),
      theme: CustomTheme.darkTheme,
    );
  }
}

class RoutingWidget extends StatefulWidget {
  const RoutingWidget({Key? key}) : super(key: key);

  @override
  State<RoutingWidget> createState() => _RoutingWidgetState();
}

class _RoutingWidgetState extends State<RoutingWidget> {
  Uri? _initialUri;
  Uri? _latestUri;
  Object? _err;

  StreamSubscription? _sub;

  @override
  void initState() {
    super.initState();
    _handleIncomingLinks();
    _handleInitialUri();
  }
  /// Handle incoming links - the ones that the app will recieve from the OS
  /// while already started.
  void _handleIncomingLinks() {
      // It will handle app links while the app is already started - be it in
      // the foreground or in the background.
      _sub = uriLinkStream.listen((Uri? uri) {
        if (!mounted) return;
        print('got uri: $uri');
        setState(() {
          _latestUri = uri;
          _err = null;
        });
      }, onError: (Object err) {
        if (!mounted) return;
        print('got err: $err');
        setState(() {
          _latestUri = null;
          if (err is FormatException) {
            _err = err;
          } else {
            _err = null;
          }
        });
      });
  }

  /// Handle the initial Uri - the one the app was started with
  ///
  /// **ATTENTION**: `getInitialLink`/`getInitialUri` should be handled
  /// ONLY ONCE in your app's lifetime, since it is not meant to change
  /// throughout your app's life.
  ///
  /// We handle all exceptions, since it is called from initState.
  Future<void> _handleInitialUri() async {
    // In this example app this is an almost useless guard, but it is here to
    // show we are not going to call getInitialUri multiple times, even if this
    // was a weidget that will be disposed of (ex. a navigation route change).
    if (!_initialUriIsHandled) {
      _initialUriIsHandled = true;
      print('_handleInitialUri called');
      try {
        final uri = await getInitialUri();
        if (uri == null) {
          print('no initial uri');
        } else {
          print('got initial uri: $uri');
        }
        if (!mounted) return;
        setState(() => _initialUri = uri);
      } on PlatformException {
        // Platform messages may fail but we ignore the exception
        print('falied to get initial uri');
      } on FormatException catch (err) {
        if (!mounted) return;
        print('malformed initial uri');
        setState(() => _err = err);
      }
    }
  }

  int _selectedIndex = 0;

  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static const List<Widget> _widgetOptions = <Widget>[
    HomePage(),
    Text(
      'Index 1: Business',
      style: optionStyle,
    ),
    WorkoutPageWidget(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Dashboard',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.face),
            label: 'Body',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.directions_run),
            label: 'Workout',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }
}
