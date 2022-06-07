import 'package:buff_fish_flutter/src/features/stats/DayRangePicker/DayRangePicker.dart';
import 'package:buff_fish_flutter/src/features/stats/LineChartWidget.dart';
import 'package:buff_fish_flutter/src/util/Pair.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

List<Pair<double, double>> weekly_data = [
  Pair(0.0, 69.0),
  Pair(1.0, 69.0),
  Pair(2.0, 69.0),
  Pair(3.0, 69.0),
  Pair(4.0, 69.0),
  Pair(5.0, 69.0),
  Pair(6.0, 69.0),
];


List<Pair<double, double>> monthly_data = [
  Pair(1.0, 5.6),
  Pair(7.0, 0.0),
  Pair(0.0, 0.0),
  Pair(2.0, 1.0)
];


class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _dayRangeValue = 0;

  void _handleDayRangeChange(int? newValue) {
    setState(() {
        _dayRangeValue = newValue!;
    });
    print("DayRangeValue:" + _dayRangeValue.toString());
  }

  List<Pair<double, double>> getWorkoutData() {
    switch (_dayRangeValue) {
      case 0:
        return weekly_data;
      case 1:
        return monthly_data;
      default:
        return [];
    }
  }

  List<Pair<double, double>> getBodyData() {
    switch (_dayRangeValue) {
      case 0:
        return weekly_data;
      case 1:
        return monthly_data;
      default:
        return [];
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              "Home"
            ),
            DayRangePickerWidget(
              value: _dayRangeValue,
              onChanged: _handleDayRangeChange,
            ),
            LineChartWidget(
              values: getWorkoutData(),
            ),
            LineChartWidget(
              values: getBodyData(),
            )
          ]
        )
      )
    );
  }
}
