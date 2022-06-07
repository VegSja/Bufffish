import 'package:flutter/material.dart';


class DayRangePickerWidget extends StatefulWidget {
  const DayRangePickerWidget({
      super.key,
      this.value = 0,
      required this.onChanged
  });

  final int value;
  final Function(int?) onChanged;

  @override
  State<DayRangePickerWidget> createState() => _DayRangePickerWidgetState();
}

class _DayRangePickerWidgetState extends State<DayRangePickerWidget> {

  List<String> choices = [
    "This week",
    "This month",
    "This year"
  ];

  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: List<Widget>.generate(
        choices.length,
        (int index) {
          return ChoiceChip(
            label: Text(choices[index]),
            selected: widget.value == index,
            onSelected: (bool selected) {
              widget.onChanged(selected ? index : null);
            },
          );
        }
      ).toList(),
    );
  }
}
