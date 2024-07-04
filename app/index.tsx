import { Link, Redirect } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const StartPage = () => {
  return <Redirect href="/home" />;
};

export default StartPage;