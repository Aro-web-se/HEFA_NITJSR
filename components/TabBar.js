import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { colors } from '../components/styles';
import { AntDesign} from '@expo/vector-icons';



const icons = {
  Categories: (props) => <AntDesign name="home" size={16} {...props} />,
  Search: (props) => <AntDesign name="search1" size={16} {...props} />,
  Store: (props) => <AntDesign name='shoppingcart' size={16} {...props} />,
  Settings: (props) => <AntDesign name="setting" size={16} {...props} />,
  Profile: (props) => <AntDesign name="profile" size={16} {...props} />,

};

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        // Skip hidden or system routes
        if (['_setemap', '+not-found'].includes(route.name)) return null;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole= "button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {
             icons [route.name]({
                color: isFocused ? colors.brand : colors.darklight
             })

            }

            <Text style={{ color: isFocused ? colors.brand : colors.darklight ,
                fontSize: 11,
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
    tabBar:{
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        borderCurve: "continuous",
        elevation: 10,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    tabBarItem:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
    }
})
