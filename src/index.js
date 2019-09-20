import React from 'react';

import { SafeAreaView, StatusBar, YellowBox } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

YellowBox.ignoreWarnings([
    'componentWillMount',
]);

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#fbbc05" />
        <SafeAreaView>
            <Routes />
        </SafeAreaView>
    </>
);

export default App;
