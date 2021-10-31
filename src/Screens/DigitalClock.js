import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  // Get current Date
  const GetTodaysDate = () => {
    var date, day, todaydate, month, year, fullDate;
    var daysOftheWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    date = new Date();

    day = daysOftheWeek[date.getDay()];

    todaydate = date.getDate();

    month = months[date.getMonth()];

    year = date.getFullYear();

    fullDate =
      day.toString() +
      ', ' +
      todaydate.toString() +
      ' ' +
      month.toString() +
      ' ' +
      year.toString();

    setCurrentDate(fullDate);
  };

  // Get current Time
  const GetTime = () => {
    var date, TimeType, hour, minutes, seconds, fullTime;

    date = new Date();

    hour = date.getHours();

    if (hour <= 11) {
      TimeType = 'AM';
    } else {
      TimeType = 'PM';
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = '0' + minutes.toString();
    }

    seconds = date.getSeconds();

    if (seconds < 10) {
      seconds = '0' + seconds.toString();
    }

    fullTime =
      hour.toString() +
      ':' +
      minutes.toString() +
      ':' +
      seconds.toString() +
      ' ' +
      TimeType.toString();

    setCurrentTime(fullTime);
  };

  useEffect(() => {
    const Clock = setInterval(() => GetTime(), 1000);
    GetTodaysDate();
    return () => {
      clearInterval(Clock);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{currentDate}</Text>
      <Text style={styles.timeText}>{currentTime}</Text>
    </View>
  );
};

export default DigitalClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 48,
  },
  dateText: {
    textAlign: 'center',
    fontSize: 28,
  },
});
