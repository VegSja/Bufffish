class Activity {
  final String id;
  final String name;
  final String type;
  final double? distance;
  final double? moving_time;
  final double? elapsed_time;
  final double? elevation_gain;
  final int day;
  final int month;
  final int year;
  final double? average_speed;
  final double? max_speed;

  const Activity({
      required this.id,
      required this.name,
      required this.type,
      required this.distance,
      required this.moving_time,
      required this.elapsed_time,
      required this.elevation_gain,
      required this.day,
      required this.month,
      required this.year,
      required this.average_speed,
      required this.max_speed
  });


  factory Activity.fromJson(Map<String, dynamic> json) {
    return Activity(
      id: json["id"] as String,
      name: json["name"] as String,
      type: json["type"] as String,
      distance: json["distance"] as double,
      moving_time: json["moving_time"] as double,
      elapsed_time: json["elapsed_time"] as double,
      elevation_gain: json["elevation_gain"] as double,
      day: json["day"] as int,
      month: json["month"] as int,
      year: json["year"] as int,
      average_speed: json["average_speed"] as double,
      max_speed: json["max_speed"] as double
    );
  }
}
