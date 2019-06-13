// @flow
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GoalList from './src/screens/GoalList';
import AddGoal from './src/screens/AddGoal';
import EditGoal from './src/screens/EditGoal';
import GoalMain from './src/screens/GoalMain';

const navOptions = {
    gesturesEnabled: true
};

const AppStack = createStackNavigator({
    GoalList,
    AddGoal,
    EditGoal,
    GoalMain
},
{ defaultNavigationOptions: navOptions});

const AppContainer = createAppContainer(AppStack);

type Props = {};

export default class App extends Component<Props> {
    render(){
        return (
            <AppContainer />
        );
    }
}
