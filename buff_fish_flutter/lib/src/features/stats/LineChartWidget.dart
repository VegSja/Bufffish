import 'package:buff_fish_flutter/src/util/Pair.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

class LineChartWidget extends StatefulWidget {
  final List<Pair<double, double>>? values;
  const LineChartWidget({Key? key, this.values}) : super(key: key);

  @override
  _LineChartWidgetState createState() => _LineChartWidgetState();
}

class _LineChartWidgetState extends State<LineChartWidget> {

  bool showAvg = false;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        AspectRatio(
          aspectRatio: 1.70,
            child: Padding(
              padding: const EdgeInsets.only(
                  right: 18.0, left: 12.0, top: 24, bottom: 12),
              child: LineChart(
                mainData()
              ),
            ),
        ),
      ],
    );
  }

  Widget bottomTitleWidgets(double value, TitleMeta meta) {
    Widget text;
    switch (value.toInt()) {
      case 2:
        text = const Text('MAR');
        break;
      case 5:
        text = const Text('JUN');
        break;
      case 8:
        text = const Text('SEP');
        break;
      default:
        text = const Text('');
        break;
    }

    return SideTitleWidget(
      axisSide: meta.axisSide,
      space: 8.0,
      child: text,
    );
  }

  Widget leftTitleWidgets(double value, TitleMeta meta) {
    String text;
    switch (value.toInt()) {
      case 1:
        text = '10K';
        break;
      case 3:
        text = '30k';
        break;
      case 5:
        text = '50k';
        break;
      default:
        return Container();
    }

    return Text(text, textAlign: TextAlign.left);
  }



  List<FlSpot> generateDataPoints() {
    List<FlSpot> dataPoints = [];
    for(int i=0; i < widget.values!.length; i++) {
      dataPoints.add(FlSpot(widget.values![i].a, widget.values![i].b));
    }
    return dataPoints;
  }


  LineChartData mainData() {
    return LineChartData(
      gridData: FlGridData(
        show: true,
        drawVerticalLine: true,
        horizontalInterval: 1,
        verticalInterval: 1,
        getDrawingHorizontalLine: (value) {
          return FlLine(
            color: const Color(0xff37434d),
            strokeWidth: 1,
          );
        },
        getDrawingVerticalLine: (value) {
          return FlLine(
            color: const Color(0xff37434d),
            strokeWidth: 1,
          );
        },
      ),
      titlesData: FlTitlesData(
        show: true,
        rightTitles: AxisTitles(
          sideTitles: SideTitles(showTitles: false),
        ),
        topTitles: AxisTitles(
          sideTitles: SideTitles(showTitles: false),
        ),
        bottomTitles: AxisTitles(
          sideTitles: SideTitles(
            showTitles: true,
            reservedSize: 30,
            interval: 1,
            //getTitlesWidget: bottomTitleWidgets,
          ),
        ),
        leftTitles: AxisTitles(
          sideTitles: SideTitles(
            showTitles: true,
            interval: 1,
            //getTitlesWidget: leftTitleWidgets,
            reservedSize: 42,
          ),
        ),
      ),
      borderData: FlBorderData(
          show: true,
          border: Border.all(color: const Color(0xff37434d), width: 1)),
      minX: 0,
      minY: 0,
      lineBarsData: [
        LineChartBarData(
          spots: generateDataPoints(),
          isCurved: true,
          gradient: LinearGradient(
            colors: [
              Theme.of(context).accentColor,
              Theme.of(context).accentColor
            ],
            begin: Alignment.centerLeft,
            end: Alignment.centerRight,
          ),
          barWidth: 5,
          isStrokeCapRound: true,
          dotData: FlDotData(
            show: true,
          ),
        ),
      ],
    );
  }
}
