import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_web_auth/flutter_web_auth.dart';
import 'package:url_launcher/url_launcher.dart'
;
class WorkoutPageWidget extends StatefulWidget {
  const WorkoutPageWidget({Key? key}) : super(key: key);

  @override
  State<WorkoutPageWidget> createState() => _WorkoutPageWidgetState();
}

class _WorkoutPageWidgetState extends State<WorkoutPageWidget> {

  final String _url = "https://strava.com/oauth/mobile/authorize?client_id=86702&redirect_uri=poc://localhost&response_type=code&approval_prompt=auto&scope=read,activity:read";
  void _launchStravaAuth() async {
    print("Sending request to: " + _url);
    if(await canLaunch(_url)) {
      await launch(
        _url,
        forceSafariVC: false,
        forceWebView: false
      );
    } else {
      throw ("Could not launch" + "_url.toString())");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: _launchStravaAuth,
          child: const Text("Strava Login"),
        )
      )
    );
  }
}
