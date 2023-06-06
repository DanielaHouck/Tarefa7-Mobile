import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Tela1 from '../views/Tela1'
import Tela2 from '../views/Tela2'
import Tela3 from '../views/Tela3'
import Tela4 from '../views/Tela4'
import Tela5 from '../views/Tela5'

const Rota1 = () => (
    <Tela1 />
);

const Rota2 = () => (
    <Tela2 />
);

const Rota3 = () => (
    <Tela3 />
);

const Rota4 = () => (
    <Tela4 />
);

const Rota5 = () => (
    <Tela5 />
);

export default class TabViewExemplo extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'posicao1', title: 'Tela1' },
            { key: 'posicao2', title: 'Tela2' },
            { key: 'posicao3', title: 'Tela3' },
            { key: 'posicao4', title: 'Tela4' },
            { key: 'posicao5', title: 'Tela5' },
        ],
    };

    render() {
        return (
            <TabView
            navigationState={this.state}
            renderScene={SceneMap({
                posicao1: Rota1,
                posicao2: Rota2, 
                posicao3: Rota3,
                posicao4: Rota4, 
                posicao5: Rota5,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={menu.container}
            />
        );
    }
}

const menu = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    scene: {
        flex: 1,
    },
});